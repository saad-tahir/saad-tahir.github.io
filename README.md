# Saad Tahir — Portfolio

**Live site:** https://saad-tahir.github.io

## Enable GitHub Pages (one-time)

1. Open https://github.com/saad-tahir/saad-tahir.github.io/settings/pages  
2. Source: **Deploy from a branch**  
3. Branch: **main** / **root** → Save  

Site is then public at **https://saad-tahir.github.io**

## Upload remaining files

`index.html` is already on the repo. Upload the rest from the portfolio zip:

1. Open https://github.com/saad-tahir/saad-tahir.github.io/upload/main  
2. Drag these folders/files into the browser:
   - `styles.css`
   - `app.js`
   - `images/` (all `.jpg` / `.gif` files)
   - `cv/Saad_Tahir_CV.pdf`
   - `reports/` (certificates)
3. Commit to **main**

Or from your machine:

```bash
git clone https://github.com/saad-tahir/saad-tahir.github.io.git
cd saad-tahir.github.io
# copy styles.css, app.js, images/, cv/, reports/ from the zip
git add -A && git commit -m "Add portfolio assets" && git push
```

## Draft mode

https://saad-tahir.github.io/?draft
