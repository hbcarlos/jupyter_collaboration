from typing import Any, Dict, List

from ._version import __version__  # noqa
from .app import YDocExtension

def _jupyter_labextension_paths():
    return [{
        "src": "labextension",
        "dest": "@jupyterlab/rtc-extension"
    }]


def _jupyter_server_extension_points() -> List[Dict[str, Any]]:
    return [{"module": "jupyter_server_ydoc", "app": YDocExtension}]
