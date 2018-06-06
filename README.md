# branding.okfn.org

[![Travis](https://img.shields.io/travis/okfn/branding/master.svg)](https://travis-ci.org/okfn/branding)

## Assets

This is a new repository only to be used for branding assets only. For web assets, see https://github.com/okfn/a

When files are added here, Travis automatically pushes them to the S3 bucket that serves https://branding.okfn.org

Never add a file directly onto master: always do a PR so someone else can verify the file belongs here.

What does belong here:

- High resolution branding assets

What does not belong here:

- Assets for serving on websites and apps
- Presentations
- General documents
- Images for blog posts

## Guide

### Editing

Requires [MkDocs](https://www.mkdocs.org/)

Local server: `mkdocs serve`

Build: `mkdocs build`

### Development

`npm install`

`grunt`
