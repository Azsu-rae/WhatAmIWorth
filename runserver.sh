#! /bin/bash

chromium http://localhost:5173/ > /dev/null 2>&1 & disown
