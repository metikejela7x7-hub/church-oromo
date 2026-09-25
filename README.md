# OECA website

Site for Oromo Evangelical Church of Atlanta. Next.js (App Router), plain CSS.

```
npm install
npm run dev      # http://localhost:3000
```

## Updating church info

Almost everything lives in `data/church.js`: service times, address, phone/email, social links,
pastor, events, sermons, ministries.

- Anything written like `[Something]` is a placeholder. On the site it shows with a dashed gold
  underline so it's easy to spot what's left.
- The location is temporarily Living Grace Lutheran Church. Update `location` when the real address is confirmed.
- Event dates are placeholders on purpose. Don't add dates until they're confirmed.
- The ministry list is a draft for leadership to confirm.

## Photos

Put images in `public/images/` and set the path in `data/church.js`, e.g. `image: "/images/hero.jpg"`.
Any spot without an image shows a labeled placeholder block.

## Where things are

- `app/globals.css` has all styles. Colors and fonts are at the top (`:root`)
- `components/` has one file per homepage section
- The Oromo phrases (welcome in the hero, blessing in the footer) are in `data/church.js` too
# church-oromo
