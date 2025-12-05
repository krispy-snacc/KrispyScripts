# Google Classroom - Download Post Attachments

Adds a download button to each Google Classroom post to quickly download all attachments at once.

## Features

-   **One-Click Download**: Download all post attachments with a single button
-   **Bulk Downloads**: Automatically opens download links for all files
-   **Smart Placement**: Button appears next to post actions
-   **API-Powered**: Fetches attachments using Google Classroom's internal API

## Installation

1. Install a userscript manager:

    - [Tampermonkey](https://www.tampermonkey.net/) (Chrome, Firefox, Edge, Safari)
    - [Violentmonkey](https://violentmonkey.github.io/) (Chrome, Firefox, Edge)

2. Install the script:

    - Click [here](../classroom_download_all.js) to view the script
    - Click "Raw" and your userscript manager will prompt installation

3. **Enable Popups**: Allow multiple popups for classroom.google.com in your browser settings

4. **(Optional) Install CORS Extension**: For smoother downloads without opening tabs:
    - [CORS Unblock](https://chrome.google.com/webstore/detail/cors-unblock) or similar
    - Prevents download URLs from opening in new tabs

## Usage

1. Navigate to any Google Classroom stream
2. Click the **three dots (⋮)** menu on any post
3. Select **"Download all attachments"**
4. All attachments will begin downloading automatically

## Browser Setup

### Allow Multiple Popups

-   **Chrome/Edge**: When prompted, click "Always allow popups from classroom.google.com"
-   **Firefox**: Settings => Privacy & Security => Permissions => Popups => Exceptions => Add classroom.google.com

### Optional: CORS Extension

Without a CORS extension, each download opens in a new tab. With the extension enabled, downloads start directly without opening tabs.

## Notes

-   Only downloads files from posts with attachments
-   Uses Google Drive direct download links
-   Works with all file types
