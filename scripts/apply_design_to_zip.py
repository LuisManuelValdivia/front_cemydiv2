#!/usr/bin/env python3
"""Apply front_cemydiv2 look&feel files into a zipped source project.

Usage:
  python scripts/apply_design_to_zip.py --zip /workspace/front_cemydiv2/_design_source/src.zip
"""

from __future__ import annotations

import argparse
import shutil
import tempfile
from pathlib import Path
from zipfile import ZIP_DEFLATED, ZipFile

REPO_ROOT = Path(__file__).resolve().parents[1]

# Files we want to port first (requested scope).
# Source in this repo -> candidate destinations inside extracted zip.
FILE_MAP: dict[str, list[str]] = {
    "app/layout.tsx": ["src/app/layout.tsx", "app/layout.tsx"],
    "app/globals.css": ["src/app/globals.css", "app/globals.css", "src/styles/globals.css", "styles/globals.css"],
    "app/page.tsx": ["src/app/page.tsx", "app/page.tsx"],
    "app/login/page.tsx": ["src/app/login/page.tsx", "app/login/page.tsx"],
    "app/registro/page.tsx": ["src/app/register/page.tsx", "src/app/registro/page.tsx", "app/register/page.tsx", "app/registro/page.tsx"],
    "app/perfil/page.tsx": ["src/app/perfil/page.tsx", "app/perfil/page.tsx", "src/app/profile/page.tsx", "app/profile/page.tsx"],
    "components/ui/HeaderNav.tsx": [
        "src/components/Header.tsx",
        "src/components/ui/HeaderNav.tsx",
        "components/Header.tsx",
        "components/ui/HeaderNav.tsx",
    ],
    "components/ui/Button.tsx": [
        "src/components/ui/Button.tsx",
        "components/ui/Button.tsx",
    ],
    "components/ui/InputField.tsx": [
        "src/components/ui/InputField.tsx",
        "components/ui/InputField.tsx",
    ],
}


def pick_target(extracted_root: Path, candidates: list[str]) -> Path:
    for candidate in candidates:
        candidate_path = extracted_root / candidate
        if candidate_path.exists():
            return candidate_path
    # fallback: first path
    return extracted_root / candidates[0]


def apply_design(zip_path: Path) -> None:
    if not zip_path.exists():
        raise FileNotFoundError(f"ZIP not found: {zip_path}")

    with tempfile.TemporaryDirectory(prefix="design_apply_") as tmpdir:
        temp_root = Path(tmpdir)
        extracted = temp_root / "extracted"
        extracted.mkdir(parents=True, exist_ok=True)

        with ZipFile(zip_path) as zf:
            zf.extractall(extracted)

        changed: list[str] = []

        for src_rel, candidates in FILE_MAP.items():
            src_abs = REPO_ROOT / src_rel
            if not src_abs.exists():
                continue

            dst_abs = pick_target(extracted, candidates)
            dst_abs.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(src_abs, dst_abs)
            changed.append(str(dst_abs.relative_to(extracted)))

        # Repack zip (overwrite).
        with ZipFile(zip_path, "w", compression=ZIP_DEFLATED) as zf:
            for file_path in sorted(extracted.rglob("*")):
                if file_path.is_file():
                    zf.write(file_path, file_path.relative_to(extracted))

    print("Applied files:")
    for item in changed:
        print(f"- {item}")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--zip", required=True, help="Path to source zip")
    args = parser.parse_args()

    apply_design(Path(args.zip).resolve())


if __name__ == "__main__":
    main()
