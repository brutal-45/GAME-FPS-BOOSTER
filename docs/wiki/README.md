# 📖 BRUTAL-FPS Wiki (publish guide)

These markdown files are the **ready-to-publish GitHub Wiki** for BRUTAL-FPS.
They are stored in the repo so they stay versioned and can be copied into the
GitHub Wiki in one step.

## How to publish to the GitHub Wiki

1. On GitHub, open the repo → **Settings → General → Features** → make sure
   **Wikis** is enabled.
2. Go to the repository page and click the **Wiki** tab.
3. Click **Create the first page** → paste the content of `docs/wiki/Home.md`,
   save it as `Home`.
4. Add each remaining page (use the exact filenames below as page names):
   - `Installation`
   - `Quick-Start`
   - `Boost-Modes`
   - `Kali-Linux-Package`
   - `Building-from-Source`
   - `CI-CD-and-Releases`
   - `Troubleshooting`
   - `FAQ`
5. (Optional) Set the custom sidebar/footer: Wiki → **Add custom sidebar** →
   paste `docs/wiki/_Sidebar.md`; **Add custom footer** → `docs/wiki/_Footer.md`.

## Alternative: push to the wiki repo (requires push access)

```bash
git clone https://github.com/brutal-45/GAME-FPS-BOOSTER.wiki.git
cd GAME-FPS-BOOSTER.wiki
cp -r ../GAME-FPS-BOOSTER/docs/wiki/*.md .
rm -f README.md   # wiki home is Home.md
git add -A && git commit -m "Add BRUTAL-FPS wiki" && git push
```

> The `.wiki.git` repository is created automatically once the wiki feature is
> enabled and the first page is saved (or the first push is made).

## Page list

| File | Page |
|------|------|
| `Home.md` | Overview + navigation |
| `Installation.md` | Installers for Windows/macOS/Linux/Kali |
| `Quick-Start.md` | Using the app + dashboard tour |
| `Boost-Modes.md` | The 6 boost modes |
| `Kali-Linux-Package.md` | Kali-special build |
| `Building-from-Source.md` | Local builds |
| `CI-CD-and-Releases.md` | Auto builds & releases |
| `Troubleshooting.md` | Fixes |
| `FAQ.md` | Common questions |
| `_Sidebar.md` / `_Footer.md` | Wiki chrome |
