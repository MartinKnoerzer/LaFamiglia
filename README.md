# La Famiglia – Vereinsrestaurant

Eine vollständige statische Webseite für **La Famiglia Vereinsrestaurant**.  
Keine Build-Tools oder externe Abhängigkeiten – einfach `index.html` im Browser öffnen.

## 🌐 Webseite aufrufen

**Lokal (ohne Server):**

1. Dateien herunterladen oder Repository klonen
2. Die Datei `index.html` mit einem Doppelklick im Browser öffnen

**Über einen Webserver (z. B. für lokale Entwicklung):**

```bash
# Python 3
python -m http.server 8080
# → http://localhost:8080

# Node.js (npx)
npx serve .
# → Adresse wird im Terminal angezeigt
```

Dann im Browser die angezeigte Adresse (z. B. `http://localhost:8080`) aufrufen.

**Über GitHub Pages (öffentlich zugänglich):**

1. Repository-Einstellungen → *Pages*
2. Branch `main` (oder aktuellen Branch), Ordner `/ (root)` wählen
3. *Save* klicken – GitHub generiert eine öffentliche URL (z. B. `https://<nutzername>.github.io/LaFamiglia/`)

---

## Dateiübersicht

| Datei        | Beschreibung |
|--------------|--------------|
| `index.html` | Einzelne HTML-Seite auf Deutsch: Navbar, Hero, Über uns, Speisekarte, Reservierung, Kontakt & Öffnungszeiten, Footer |
| `styles.css` | Responsive Layout mit CSS Custom Properties; mobiles Hamburger-Menü; italienische Farbpalette (Dunkelrot `#8b1a1a`, Gold `#d4a843`) |
| `script.js`  | Vanilla JS: Mobiler Nav-Toggle, scroll-basiertes Hervorheben des aktiven Links, Mindestdatum der Reservierung auf heute gesetzt, Formular-Feedback |

## Hinweis

Die Adresse, Telefonnummer, E-Mail-Adresse und Menüpreise sind Platzhalter und müssen vor der Veröffentlichung durch die tatsächlichen Restaurantdaten ersetzt werden.

