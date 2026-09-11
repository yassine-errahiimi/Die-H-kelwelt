import { User, Category, Post } from '../types';

import creatorAvatar from '../assets/images/creator_avatar_1788943509294.jpg';
import amigurumiPanda from '../assets/images/amigurumi_panda_1788945550156.jpg';
import amigurumiPandaPin from '../assets/images/amigurumi_panda_pin_1788945567933.jpg';
import crochetPatternInfographic from '../assets/images/gpt-image-2_A_clean_and_professional_4-section_step-by-step_crochet_pattern_infographic_for_-0.webp';
import bodyAndHeadSteps from '../assets/images/Etape-par-Etape-Confectionner-le-Corps-et-la-Tete-1.webp';
import bodyAndHeadStepsV2 from '../assets/images/Etape-par-Etape-Confectionner-le-Corps-et-la-Tete.webp';
import finalAssemblySteps from '../assets/images/Etape-Finale-Assemblage-Parfait-et-Couture-Invisible-au-Crochet.webp';
import suppliesSteps from '../assets/images/Les-Fournitures-Indispensables-pour-Commencer.webp';
import earsLegsFaceSteps from '../assets/images/Realisation-des-Oreilles-des-Pattes-et-du-Visage.webp';
import crochetCardigan from '../assets/images/crochet_cardigan_1788943536799.jpg';
import butterflyCardigan from '../assets/images/crochet_cardigan_1788943536799.jpg';
import ccImage from '../assets/images/cc.png';
import amigurumiPandaFeature from '../assets/images/amigurumi_panda_1788945550156.jpg';

export const defaultAuthor: User = {
  id: 'author-1',
  name: 'Sophie Baum',
  avatar: creatorAvatar,
  bio: 'Ich liebe Häkeln, kreative DIY-Projekte und schöne Dinge, die mit den eigenen Händen entstehen. Auf Die Häkelwelt teile ich Häkelanleitungen, Inspirationen und Tipps rund ums Häkeln.',
  role: 'Gründerin & Häkeldesignerin',
};

export const authorCoinCrochet: User = {
  id: 'author-coin-crochet',
  name: 'Die Häkel-Ecke',
  avatar: creatorAvatar,
  bio: 'Leidenschaftliche Häkeldesignerin für anfängerfreundliche Amigurumi-Muster, kuschelige Kuscheltiere und detaillierte Schritt-für-Schritt-Anleitungen.',
  role: 'Häkeldesignerin & Amigurumi-Spezialistin',
};

export const defaultCategories: Category[] = [
  { id: 'cat-1', name: 'Häkelanleitungen', slug: 'haekelanleitungen', description: 'Schritt-für-Schritt Anleitungen mit genauen Maschenangaben für jedes Niveau.' },
  { id: 'cat-2', name: 'Häkelideen', slug: 'haekelideen', description: 'Kreative Inspirationen und trendige DIY-Projekte zum Selbermachen.' },
  { id: 'cat-3', name: 'Für Anfänger', slug: 'fuer-anfaenger', description: 'Einfache Grundlagen, Maschenerklärungen und schnelle Erfolge ohne Frust.' },
  { id: 'cat-4', name: 'Kleidung', slug: 'kleidung', description: 'Cardigans, Tops, Pullover und gemütliche Maschenmode zum Wohlfühlen.' },
  { id: 'cat-5', name: 'Accessoires', slug: 'accessoires', description: 'Taschen, Stirnbänder, Schals und praktische Begleiter mit Charme.' },
  { id: 'cat-6', name: 'Home & Deko', slug: 'home-deko', description: 'Wohnaccessoires, Kissen, Untersetzer und Decken für ein gemütliches Zuhause.' },
];

export const defaultPosts: Post[] = [
  {
    id: 'post-amigurumi-panda',
    title: 'Amigurumi Panda häkeln: Ultimative Anleitung & Schritt-für-Schritt Muster',
    slug: 'amigurumi-panda-haekeln-anleitung-muster',
    excerpt: 'Träumst du davon, ein zauberhaftes Kuscheltier mit deinen eigenen Händen zu häkeln? Diese ausführliche Amigurumi-Panda-Anleitung begleitet dich Schritt für Schritt von der ersten Masche bis zum fertigen Panda.',
    content: `Träumst du davon, ein zauberhaftes Kuscheltier mit deinen eigenen Händen zu häkeln? Diese ausführliche Amigurumi-Panda-Anleitung ist genau das Richtige für dich! Sie kombiniert detaillierte Erklärungen mit einem exakt gezählten Maschenmuster, damit du von der ersten Masche bis zum fertigen Panda ohne Rätselraten häkeln kannst.

---

### Inhaltsverzeichnis
- 1. Das benötigte Material
- 2. Abkürzungen & goldene Häkelregeln
- 3. Schritt für Schritt: Der Pandakörper (Muster & Anleitung)
- 4. Schritt für Schritt: Kopf und Gesicht
- 5. Schritt für Schritt: Ohren, Augenringe und Schnauze
- 6. Schritt für Schritt: Arme und Beine
- 7. Zauberhaftes Zusammennähen & Feinarbeiten
- 8. Häufig gestellte Fragen (FAQ)

---

### 1. Das benötigte Material

Für ein sauberes und gleichmäßiges Maschenbild lege dir folgende Materialien bereit:

- **Baumwollgarn:** 50g in Weiß und 30g in Schwarz (z. B. Schachenmayr Catania oder Rico Baby Cotton Soft).
- **Häkelnadel:** Stärke 2,5 mm oder 3 mm (wähle die Nadel etwas kleiner als auf der Banderole empfohlen, damit die Maschen schön fest sind und die Füllwatte nicht herausschaut).
- **Füllmaterial:** Hochwertige synthetische Füllwatte (Polyester-Bastelwatte).
    - **Zubehör:** Sicherheitsaugen (6 oder 8 mm), stumpfe Wollnadel zum Vernähen und Maschenmarkierer.
    
    ![Materialübersicht: Alle unverzichtbaren Häzubehörteile zum Ausrollen](${suppliesSteps})
    
    ---

Hier findest du alle wichtigen Häkelabkürzungen für die folgende Anleitung:

- **MR / Fadenring:** Magischer Ring (die unverzichtbare Starttechnik für Amigurumis).
- **fM:** Feste Masche.
- **Zun:** Zunahme (häkle 2 feste Maschen in dieselbe Einstichstelle, um die Runde zu vergrößern).
- **Abn:** Unsichtbare Abnahme (2 Maschen unsichtbar zusammen abmaschen, um das Häkelteil zu verkleinern).
- **Lm:** Luftmasche.
- **( … ) * x:** Den Inhalt der Klammer so oft wiederholen wie angegeben (z. B. \`(1 fM, 1 Zun) * 6\` = abwechselnd 1 feste Masche und 1 Zunahme häkeln, insgesamt 6-mal in der Runde).
- **[ Zahl ]:** Die Gesamtzahl der Maschen am Ende der jeweiligen Runde.

💡 **Profi-Tipp:** Setze immer einen Maschenmarkierer in die erste Masche jeder neuen Runde, damit du nie den Überblick über den Rundenanfang verlierst.

![Schritt-für-Schritt Häkelmuster Infografik - 4-Sektorige Anleitung für Amigurumi Grundtechniken](${crochetPatternInfographic})

---

### 3. Schritt für Schritt: Der Pandakörper (Weißes Garn)

Der Körper wird von unten nach oben in Spiralrunden gehäkelt. Wir beginnen am Bauch in Weiß:

- **Runde 1:** 6 fM in einen Fadenring [6] — *Ziehe den Faden fest an, um das Mittelloch komplett zu schließen.*
- **Runde 2:** 6 Zun [12] — *Häkle 2 feste Maschen in jede Masche der Vorrunde.*
- **Runde 3:** (1 fM, 1 Zun) * 6 [18]
- **Runde 4:** (2 fM, 1 Zun) * 6 [24]
- **Runde 5:** (3 fM, 1 Zun) * 6 [30]
- **Runde 6:** (4 fM, 1 Zun) * 6 [36] — *Der Boden des Körpers hat nun seine maximale Breite erreicht.*
- **Runden 7 bis 12 (6 Runden):** 1 fM in jede Masche [36] — *Hier häkelst du ohne Zunahmen oder Abnahmen gleichmäßig in die Höhe.*
- **Runde 13:** (4 fM, 1 Abn) * 6 [30] — *Nun beginnt das sanfte Verjüngen der Silhouette.*
- **Runde 14:** (3 fM, 1 Abn) * 6 [24]

💡 **Füll-Tipp:** Jetzt ist der ideale Zeitpunkt, um erste Füllwatte portionsweise einzufüllen und den Körper gleichmäßig in Form zu modellieren.

- **Runde 15:** (2 fM, 1 Abn) * 6 [18]
- **Runde 16:** (1 fM, 1 Abn) * 6 [12] — *Fülle die restliche Watte ein, bis der Körper fest und prall geformt ist.*
- **Runde 17:** 6 Abn [6] — *Schneide den Faden ab, ziehe ihn mit der Wollnadel durch die vorderen Maschenglieder der 6 restlichen Maschen, fest anziehen und vernähen.*

![Schritt-für-Schritt Bild: Körper und Kopf des Pandabären zusammen konstruieren](${bodyAndHeadSteps})

---

### 4. Schritt für Schritt: Kopf und Augen (Weißes Garn)

Der Kopf wird ähnlich wie der Körper gearbeitet, bildet jedoch eine etwas größere Kugel für den typischen Panda-Look:

- **Runde 1:** 6 fM in einen Fadenring [6]
- **Runde 2:** 6 Zun [12]
- **Runde 3:** (1 fM, 1 Zun) * 6 [18]
- **Runde 4:** (2 fM, 1 Zun) * 6 [24]
- **Runde 5:** (3 fM, 1 Zun) * 6 [30]
- **Runde 6:** (4 fM, 1 Zun) * 6 [36]
- **Runde 7:** (5 fM, 1 Zun) * 6 [42] — *Der Kopf ist breiter als der Körper und sorgt für das niedliche Kindchenschema.*
- **Runden 8 bis 14 (7 Runden):** 1 fM in jede Masche [42] — *Gleichmäßige Höhenrunden.*
- **Runde 15:** (5 fM, 1 Abn) * 6 [36]
- **Runde 16:** (4 fM, 1 Abn) * 6 [30]
- **Runde 17:** (3 fM, 1 Abn) * 6 [24]

💡 **Sicherheitsaugen anbringen:** Platziere die Sicherheitsaugen zwischen Runde 10 und 11 des Kopfes mit ca. 6 bis 7 Maschen Abstand zueinander. Wenn der Panda für ein Kleinkind unter 3 Jahren gedacht ist, sticke die Augen bitte sicherheitshalber mit schwarzem Garn auf. Fülle den Kopf anschließend fest mit Watte aus.

- **Runde 18:** (2 fM, 1 Abn) * 6 [18]
- **Runde 19:** (1 fM, 1 Abn) * 6 [12]
- **Runde 20:** 6 Abn [6] — *Faden lang abschneiden, um den Kopf später stabil auf den Körper zu nähen.*

---

### 5. Schritt für Schritt: Ohren, Augenringe und Schnauze

Diese Details verleihen dem Panda seinen unverwechselbaren, liebevollen Ausdruck:

- **Die Ohren (2x in Schwarz häkeln):** Runde 1: 6 fM in einen MR [6] • Runde 2: (1 fM, 1 Zun) * 3 [9] • Runde 3: (2 fM, 1 Zun) * 3 [12] • Runden 4 bis 5: 1 fM in jede Masche [12]. *Langen Faden zum Annähen lassen. Die Ohren werden nicht ausgestopft, sondern flachgedrückt aufgenäht.*
- **Die Augenringe (2x in Schwarz häkeln):** Schlage 4 Luftmaschen an. Häkle um die Luftmaschenkette herum mit festen Maschen (3 fM in die letzte Masche zum Wenden, dann auf der Unterseite zurück) [insgesamt 8 Maschen]. Nähe die ovalen Flecken direkt hinter bzw. um die Augen herum auf.
    - **Die Schnauze:** Mit einem Stück schwarzem Garn und der Wollnadel eine kleine dreieckige Nase mittig unterhalb der Augen aufsticken und nach unten hin einen feinen Mund in umgekehrter V-Form anbringen.

    ![Schritt-für-Schritt Bild: Ohren, Beine und Gesichtszüge des Pandabären](${earsLegsFaceSteps})

    ---

### 6. Schritt für Schritt: Arme und Beine

Die Gliedmaßen sorgen dafür, dass der kleine Panda aufrecht sitzen kann:

- **Die Arme (2x in Schwarz häkeln):** Runde 1: 6 fM in einen MR [6] • Runde 2: (1 fM, 1 Zun) * 3 [9] • Runden 3 bis 6 (4 Runden): 1 fM in jede Masche [9]. *Den unteren Teil nur leicht mit Watte füllen. Die Öffnung flach zusammendrücken und mit festen Maschen zusammenhäkeln. Langen Faden lassen.*
- **Die Beine (2x in Schwarz häkeln):** Runde 1: 6 fM in einen MR [6] • Runde 2: 6 Zun [12] • Runde 3: (1 fM, 1 Zun) * 6 [18] • Runden 4 bis 5 (2 Runden): 1 fM in jede Masche [18] — *bildet die stabile Fußfläche.* • Runde 6: (1 fM, 1 Abn) * 6 [12] • Runde 7: 1 fM in jede Masche [12]. *Die Beine fest mit Watte füllen, Öffnung flach zusammennähen.*

---

### 7. Zauberhaftes Zusammennähen & Feinarbeiten

Hier entsteht das fertige Panda-Kuscheltier:

![Schritt-für-Schritt Bild: Finaler Zusammenbau und unsichtbare Konstruktion beim Häkeln](${finalAssemblySteps})

- **Kopf befestigen:** Setze den Kopf mittig auf den Körper. Fixiere ihn mit Stecknadeln, damit er nicht verrutscht, und nähe ihn mit unsichtbaren Matratzenstichen fest an.
- **Ohren anbringen:** Nähe die beiden Ohren oben links und rechts an den Kopf (etwa zwischen Runde 4 und 8), sodass sie symmetrisch sitzen.
- **Gliedmaßen annähen:** Nähe die Beine seitlich unten an den Körper, damit der Panda sicher und stabil sitzt. Die Arme werden etwas weiter oben, knapp unterhalb des Halses befestigt.
- **Fäden vernähen:** Alle restlichen Fadenenden sauber mit der Wollnadel in das Innere des Körpers ziehen und abschneiden.

---

### 8. Häufig gestellte Fragen (FAQ)

- **Ist diese Anleitung wirklich für komplette Häkelanfänger geeignet?** Ja! Wenn du den Fadenring und die feste Masche beherrschst, kannst du diesem bebilderten Schritt-für-Schritt-Muster problemlos folgen.
- **Wie wasche ich das fertige Häkeltier am besten?** Am besten sanft per Handwäsche in lauwarmem Wasser mit milder Seife waschen. Nicht auswringen, sondern vorsichtig in einem Handtuch ausdrücken und liegend an der Luft trocknen lassen.

---

### Jetzt bist du dran!
Herzlichen Glückwunsch! Du hast nun alle Schritte und das genaue Zählmuster, um deinen eigenen kuscheligen Panda von Kopf bis Fuß zu häkeln. Teile dein Ergebnis gerne auf Instagram mit dem Hashtag **#MeinHäkelPanda**, wir freuen uns riesig auf deine Fotos!`,
    featuredImage: amigurumiPanda,
    featuredImageAlt: 'Handgemachter Amigurumi Panda gehäkelt aus weicher Baumwolle sitzend auf einem Holztisch mit Garnknäueln',
    pinterestImage: amigurumiPandaPin,
    pinterestTitle: 'Amigurumi Panda häkeln: Kostenlose Schritt-für-Schritt Anleitung & Muster',
    pinterestDescription: 'Häkle deinen eigenen niedlichen Amigurumi Panda! Ausführliche Schritt-für-Schritt-Anleitung mit genauen Maschenangaben und Tipps für Anfänger.',
    category: 'Häkelanleitungen',
    tags: ['Amigurumi', 'Panda häkeln', 'Häkelanleitung', 'Kuscheltier DIY', 'Kostenlose Anleitung'],
    seoTitle: 'Amigurumi Panda häkeln: Schritt-für-Schritt Anleitung & Muster',
    seoDescription: 'Komplette Anleitung zum Häkeln eines Amigurumi Pandas. Mit genauen Maschenangaben, Materialliste und Tipps zum Zusammennähen für Anfänger.',
    published: true,
    publishedAt: '2026-08-15',
    createdAt: '2026-08-15',
    updatedAt: '2026-08-15',
    readingTime: '8 Min. Lesezeit',
    author: authorCoinCrochet,
  },
  {
    id: 'post-schmetterlings-cardigan',
    title: 'Schmetterlings-Cardigan häkeln – Eine besondere Häkelidee mit Tapestry Crochet 🦋',
    slug: 'schmetterlings-cardigan-haekeln-tapestry-crochet',
    excerpt: 'Du möchtest ein Häkelprojekt ausprobieren, das garantiert alle Blicke auf sich zieht? Dieser Schmetterlings-Cardigan im Monarchfalter-Stil wird mit der Tapestry-Crochet-Technik gearbeitet und besteht aus mehreren gehäkelten Teilen, die zu wunderschönen großen Schmetterlingsflügeln zusammengesetzt werden.',
    content: `Du möchtest ein Häkelprojekt ausprobieren, das garantiert alle Blicke auf sich zieht? Dann ist dieser **Schmetterlings-Cardigan im Monarchfalter-Stil** genau das Richtige für dich.

Der Cardigan wird mit der **Tapestry-Crochet-Technik** gearbeitet und besteht aus mehreren gehäkelten Teilen, die später miteinander verbunden werden. Zusammengesetzt ergeben sie wunderschöne, große Schmetterlingsflügel.

Das Design kann sowohl als **Cardigan mit Knöpfen vorne** als auch als **Sweater** gearbeitet werden.

In diesem Beitrag zeigen wir dir, welche Materialien du brauchst, welche Größen möglich sind und wie der Schmetterlings-Cardigan aufgebaut wird.

---

## 🦋 Was macht den Schmetterlings-Cardigan so besonders?

Das Besondere an diesem Häkelmuster ist das große Flügelmotiv.

Durch die Kombination aus verschiedenen Farben und **Tapestry Crochet** entsteht ein auffälliges Muster, das an die Flügel eines Monarchfalters erinnert.

Der fertige Cardigan ist nicht nur ein gemütliches Kleidungsstück, sondern gleichzeitig ein echtes Statement-Piece.

Wenn du gerne außergewöhnliche **Häkelkleidung** selber machst, ist dieses Projekt eine tolle Herausforderung.

---

## 🧶 Benötigte Materialien

Für den Schmetterlings-Cardigan benötigst du:

* Garn der Kategorie 4 – Worsted
* Garn in 3 verschiedenen Farben
* ca. **900–1500 m** für die Randfarbe (Braun oder Schwarz)
* ca. **600–1000 m** für die Hauptfarbe der Flügel
* ca. **100–200 m** weißes Garn
* **5 mm Häkelnadel**
* **4 mm Häkelnadel**
* Knöpfe mit ca. **2,5 cm Durchmesser**
* Wollnadel
* Schere
* Maschenmarkierer, optional

### Welches Garn eignet sich?

Am besten verwendest du ein Garn der Kategorie 4, das eher auf der dünneren Seite dieser Garnstärke liegt.

So bleibt der Cardigan weich und beweglich und wird nicht zu steif.

Besonders wichtig ist ein Garn mit schönem Fall, damit die großen Flügel später gut zur Geltung kommen.

---

# 📏 Welche Größe passt zu dir?

Das Häkelmuster ist in drei Größen aufgeteilt.

### Small – XS/S

**Höhe:** ca. 48 cm [🔗 StitchFiddle](https://www.stitchfiddle.com/en/c/sh2gg0-hl6uq6)
**Breite:** ca. 130 cm

### Medium – M/L

**Höhe:** ca. 57 cm [🔗 StitchFiddle](https://www.stitchfiddle.com/en/c/sh2ghs-d73fsy)
**Breite:** ca. 150 cm

### Large – XL/2XL

**Höhe:** ca. 69 cm [🔗 StitchFiddle](https://www.stitchfiddle.com/en/c/sh2gh2-g5we58)
**Breite:** ca. 166 cm

---

# 🧵 Wie wird der Schmetterlings-Cardigan gehäkelt?

Der Cardigan wird Schritt für Schritt aus mehreren Teilen aufgebaut.

## 1. Linkes Vorderteil

Das erste Vorderteil bildet gleichzeitig einen Teil des Schmetterlingsflügels.

Du häkelst von unten nach oben und folgst dabei dem Tapestry-Crochet-Muster.

Die Hin- und Rückreihen werden entsprechend dem jeweiligen Muster gelesen.

Jedes Kästchen im Muster entspricht dabei einer **festen Masche**.

Durch die unterschiedlichen Farben entsteht nach und nach das charakteristische Flügelmotiv.

---

## 2. Rechtes Vorderteil

Das rechte Vorderteil wird ähnlich wie das linke Vorderteil gearbeitet.

Der Unterschied: Das Muster wird gespiegelt.

Auch hier arbeitest du von unten nach oben und folgst der jeweiligen PDF-Anleitung.

Bei größeren Zu- und Abnahmen werden spezielle Techniken verwendet, damit die Form des Flügels sauber entsteht.

---

## 3. Rückenteil

Das Rückenteil wird nach demselben Prinzip gearbeitet.

Hier wird das vollständige Flügelmotiv verwendet.

Wenn du lieber einen schlichteren Rücken möchtest, kannst du den Rückenteil auch ohne Farbwechsel und ohne Tapestry-Muster häkeln.

So entsteht ein etwas dezenterer Look, während die Vorderseite weiterhin das auffällige Schmetterlingsmotiv zeigt.

---

## ✨ 4. Die Kanten der einzelnen Teile

Nachdem die einzelnen Teile fertig gehäkelt sind, werden ihre Kanten eingefasst.

Dafür verwendest du die **4-mm-Häkelnadel**.

Arbeite eine Reihe feste Maschen entlang der Kanten und achte darauf, möglichst gleichmäßig zu arbeiten.

Diese Umrandung sorgt dafür, dass die einzelnen Teile stabiler werden und später sauber miteinander verbunden werden können.

---

# 🪡 5. Die Teile miteinander verbinden

Jetzt kommt der spannende Teil.

Wenn alle drei Teile fertig sind, werden sie miteinander verbunden.

Du kannst dafür entweder eine **Nähtechnik** oder eine **Verbindung mit der Häkelnadel** verwenden.

Eine saubere Verbindung ist besonders wichtig, damit die großen Flügel ihre Form behalten und die Übergänge von außen möglichst unauffällig aussehen.

---

# 🦋 6. Vorderer Abschluss, Knopfleiste und Fühler

Für die Vorderseite wird anschließend eine dekorative Abschlusskante gearbeitet.

Diese kann gleichzeitig als **Knopfleiste** dienen.

Die Knopflöcher werden passend zur Größe deiner Knöpfe gearbeitet.

Zusätzlich kannst du kleine **Schmetterlingsfühler** anbringen.

Sie sind optional, geben dem Design aber einen besonders verspielten Look.

Die Fühler können außerdem als dekorative Bänder zum Schließen des Cardigans verwendet werden.

---

# 🔘 7. Die Knöpfe

Für dieses Design eignen sich Knöpfe mit einem Durchmesser von ungefähr **2,5 cm**.

Je nachdem, welche Knopfgröße du verwendest, kann die Knopfleiste angepasst werden.

Nähe die Knöpfe erst an, wenn die komplette Vorderkante fertig ist.

So kannst du die Position der Knöpfe genau bestimmen und sicherstellen, dass der Cardigan gleichmäßig geschlossen werden kann.

---

# 💡 Wichtige Tipps für Tapestry Crochet

Beim Arbeiten mit mehreren Farben gibt es einige Dinge zu beachten.

### 1. Saubere Farbwechsel

Wenn du mit derselben Farbe weiterarbeitest, wird die Masche normal durch beide Maschenschlingen gearbeitet.

Bei einem Farbwechsel kann je nach Seite des Projekts nur eine bestimmte Maschenschlinge verwendet werden.

Dadurch wird das Muster besonders klar und sauber.

### 2. Nicht verwendete Fäden mitführen

Die Farben, die du gerade nicht verwendest, solltest du beim Häkeln mitführen.

So entstehen auf der Rückseite keine langen, losen Fäden.

### 3. Zunahmen und Abnahmen

Zunahmen und Abnahmen befinden sich normalerweise am Anfang oder Ende einer Reihe.

Eine zusätzliche Masche wird als Zunahme gearbeitet, während beim Abnehmen Maschen zusammengehäkelt oder übersprungen werden.

### 4. Mehrere Maschen hinzufügen

Wenn du auf einer Seite zwei oder mehr Maschen hinzufügen musst, kann eine **Foundation Single Crochet** verwendet werden.

Auf der anderen Seite können zusätzliche Luftmaschen gearbeitet werden.

### 5. Achte auf deine Spannung

Arbeite mit einer mittleren bis eher lockeren Fadenspannung.

Wenn dein fertiger Cardigan sehr fest oder steif wirkt, kann ein vorsichtiges **Dämpfen bzw. Blocking** helfen.

---

# 👕 Cardigan oder Sweater?

Du kannst dieses Design auf zwei verschiedene Arten tragen.

### Schmetterlings-Cardigan

Beim Cardigan werden die Vorderteile so gearbeitet, dass vorne eine Öffnung entsteht.

Anschließend kannst du Knöpfe anbringen.

### Schmetterlings-Sweater

Wenn du lieber einen geschlossenen Sweater möchtest, kannst du zwei vollständige Flügel arbeiten und diese entsprechend miteinander verbinden.

Dadurch entsteht ein geschlossener Look ohne klassische Knopfleiste.

---

# 🧶 Welches Garn ist am besten?

Für dieses Projekt empfehlen wir **Worsted-Garn der Kategorie 4**.

Wähle möglichst ein Garn, das innerhalb dieser Kategorie nicht zu dick ist.

Ein zu dickes Garn kann dazu führen, dass der Cardigan sehr schwer und steif wird.

Für einen schönen Fall solltest du deshalb ein Garn wählen, das weich ist und sich angenehm tragen lässt.

Als Inspiration wurden für das ursprüngliche Design unter anderem Garne wie **Lion Brand Pound of Love**, **I Love This Yarn** und **Impeccable Solid Yarn** verwendet.

Du kannst selbstverständlich auch ein vergleichbares Garn verwenden, das in Deutschland erhältlich ist.

---

# ❤️ Für wen eignet sich dieses Häkelprojekt?

Der Schmetterlings-Cardigan ist ideal für dich, wenn du:

* gerne außergewöhnliche Kleidung häkelst
* Tapestry Crochet ausprobieren möchtest
* große Häkelmotive liebst
* farbenfrohe Cardigans magst
* ein besonderes DIY-Projekt suchst
* gerne individuelle Kleidung selbst machst

Das Projekt ist etwas anspruchsvoller als ein einfacher Häkel-Cardigan, aber gerade deshalb besonders interessant für erfahrene Anfängerinnen und fortgeschrittene Häklerinnen.

---

## 🦋 Fazit

Ein selbst gehäkelter Schmetterlings-Cardigan ist mehr als nur ein Kleidungsstück.

Durch das große Flügelmotiv, die verschiedenen Farben und die besondere Tapestry-Crochet-Technik entsteht ein einzigartiges Design, das garantiert auffällt.

Egal, ob du dich für einen offenen **Schmetterlings-Cardigan** oder einen geschlossenen **Schmetterlings-Sweater** entscheidest – dieses Projekt bietet viel Raum für deine eigenen Farbkombinationen und Ideen.

**Du hast deine Flügel gehäkelt. Jetzt ist es Zeit zu fliegen. 🦋**`,
    featuredImage: butterflyCardigan,
    featuredImageAlt: 'Schmetterlings-Cardigan im Monarchfalter-Stil gehäkelt mit Tapestry Crochet Technik in Braun, Orange und Weiß',
    pinterestImage: butterflyCardigan,
    pinterestTitle: 'Schmetterlings-Cardigan häkeln: Tapestry Crochet Anleitung für Monarchfalter-Design',
    pinterestDescription: 'Häkle deinen eigenen Schmetterlings-Cardigan! Ausführliche Anleitung mit Tapestry Crochet Technik, Größentabelle und Tipps für Anfänger und Fortgeschrittene.',
    category: 'Kleidung',
    tags: ['Cardigan häkeln', 'Tapestry Crochet', 'Schmetterlings-Motiv', 'Häkelanleitung Kleidung', 'Monarchfalter Design'],
    seoTitle: 'Schmetterlings-Cardigan häkeln: Tapestry Crochet Anleitung & Muster',
    seoDescription: 'Komplette Anleitung für Schmetterlings-Cardigan mit Tapestry Crochet. Materialliste, Größentabelle (XS-2XL), Schritt-für-Schritt Aufbau und Tipps für Farbwechsel.',
    published: true,
    publishedAt: '2026-09-09',
    createdAt: '2026-09-09',
    updatedAt: '2026-09-09',
    readingTime: '12 Min. Lesezeit',
    author: authorCoinCrochet,
  },
  {
    id: 'post-einfacher-kuerbis-haekeln',
    title: 'Einfacher Kürbis häkeln – Schnelle Herbst-Deko in 2 Größen 🎃',
    slug: 'einfacher-kuerbis-haekeln-herbstdeko-anleitung',
    excerpt: 'Schnelle Herbst-Deko für dein Zuhause: Häkle einen kuscheligen Kürbis aus Bulky-Garn in zwei Größen. Mit exakter Maschenzählung, Materialtipps und Anfänger-freundlichen Techniken (Yarn Under, Magic Ring, invisible Abnahme).',
    content: `Der Herbst ist die schönste Zeit des Jahres – und was darf auf keinem gemütlichen Esstisch, keinem Regal und keiner Fensterbank fehlen? Genau: selbst gehäkelte Kürbisse in warmen, herbstlichen Farben. 🎃

Mit dieser Häkelanleitung häkelst du **zwei Kürbis-Größen** in wenigen Stunden – perfekt als schnelles Wochenendprojekt, als herbstliche Tischdeko, als Kissenersatz auf dem Sofa oder als kleines Geschenk für Nachbarinnen und Freunde.

Das Besondere an diesem Muster: Wir arbeiten mit **dickerem Bulky-Garn**, damit der Kürbis schön weich, voluminös und kuschelig wird. Dank der detaillierten Maschenzählung ist die Anleitung auch für **Häkel-Anfängerinnen** problemlos machbar. Lass uns gemeinsam in den Herbst starten!

---

# Warum du diesen Kürbis unbedingt häkeln solltest

Ein Kürbis aus Wolle ist viel mehr als nur ein herbstliches Deko-Objekt.

Er ist **weich, unzerbrechlich** und überlebt jeden Herbst von Jahr zu Jahr – ganz anders als ein echter Kürbis, der nach ein paar Wochen schlecht wird. Du kannst ihn jedes Jahr aufs Neue aufstellen, kombinieren und in Szene setzen.

Zudem:
- Er ist **rückgratfreundlich** – kein schmutziges Schnitzen, kein klebriges Fruchtfleisch.
- Du kannst **Farbe und Größe perfekt an deine Einrichtung anpassen** (warmes Orange, sanftes Creme, kräftiges Bordeaux oder dezenteres Beige – alles ist möglich).
- Das Projekt ist **unkompliziert und schnell fertig** – ideal, wenn du mal wieder ein schnelles Erfolgserlebnis suchst.
- Fertige Exemplare **darfst du verkaufen** (Danke an die kreative Muster-Idee).

Ob auf dem Beistelltisch neben einer Tasse Tee, als Hingucker auf dem herbstlichen Kranz oder in einer Gruppe unterschiedlich großer Kürbisse auf dem Sideboard – dieser Häkelkürbis strahlt Ruhe, Wärme und Gemütlichkeit aus.

---

# 🎒 Was du für den Kürbis brauchst

Bevor du loslegst, lege dir folgende Materialien zurecht. So hast du alles griffbereit und musst zwischendurch nicht unterbrechen.

## Garn

Für die Kürbiskörper verwenden wir **Bulky-Garn (Garnstärke 5 / super bulky)**, weil es schnell große Flächen ergibt und schön kuschelig aussieht.

### Großer Kürbis (13 cm hoch × 15 cm breit)
- **ca. 165 g Bulky-Garn** in herbstlichem Orange (z. B. *Loops & Threads Cozy Heathered* oder ein vergleichbares deutsches Garn wie *Schachenmayr Bravo Super Bulky*, *Grundl Super Bulky* oder *Rellana Super Bulky*).

### Kleiner Kürbis (7,5 cm hoch × 10 cm breit)
- **ca. 40 g Bulky-Garn** in derselben oder einer harmonierenden Farbe.

### Für Stiel und Blätter
- **Braunes & grünes Garn der Stärke 4 (Worsted)**, jeweils ein kleines Knäuel reicht. Gut geeignet: *Loops & Threads Impeccable Chocolate + Forest* oder deutsche Alternativen wie *Schachenmayr Catania* in Schokoladenbraun und Moosgrün.

## Häkelnadeln
- **8 mm-Häkelnadel** für den Bulky-Kürbiskörper.
- **3,5 mm-Häkelnadel** für den Stiel und die Blätter aus Worsted-Garn.

## Weiteres Zubehör
- **Polyester-Füllwatte** (hochwertig, damit der Kürbis lange seine Form behält).
- **Wollnadel** (stumpf, zum Vernähen der Fäden und Zusammennähen).
- **Schere**.
- **Maschenmarkierer** (oder ein Stück Kontrastgarn, um den Rundenanfang zu markieren).

💡 **Tipp zur Garnauswahl:** Du musst nicht genau die oben genannten Marken verwenden. Wichtig ist nur, dass das Bulky-Garn **dick und flauschig** ist und dein Kürbis am Ende nicht zu steif wird. Alternativ kannst du auch:
- *Bernat Blanket* mit einer **6,5 mm-Nadel**
- *Sweet Snuggles* mit einer **9 mm-Nadel**
- *Sweet Snuggles Lite* mit einer **5,5 mm-Nadel**

Probiere einfach aus, welche Garn-Nadel-Kombination dir am besten liegt und dein Kürbis die gewünschte Größe erreicht.

---

# 🧵 Häkelabkürzungen & Grundlagen

In dieser Anleitung arbeiten wir mit **deutschen und internationalen Häkelzeichen** – hier die Übersicht für Einsteigerinnen:

| Abkürzung | Bedeutung |
|---|---|
| **Lm** | Luftmasche |
| **fM** | Feste Masche |
| **Zun** | Zunahme = 2 feste Maschen in dieselbe Einstichstelle |
| **Abn** | Unsichtbare Abnahme (2 Maschen zusammenhäkeln, ohne dass es sichtbar ist) |
| **Kett-MR** | Magischer Ring (Fadenring) – perfekt für Amigurumi und runde Projekte |
| **fM n** | n feste Maschen nacheinander häkeln (jeweils eine pro Stich) |
| **(fM 4, Zun) × n** | Den Klammerausdruck insgesamt n-mal wiederholen |
| **Kettm** | Kettmasche (zum Verbinden von Runden, wo nötig) |
| **(36)** | Gesamtzahl der Maschen am Ende einer Runde |

---

# ✨ Wichtige Techniken kurz erklärt

Bevor wir in die Runden einsteigen, wiederholen wir kurz die drei wichtigsten Techniken, damit du keine Fragen hast.

## 1. Der Magische Ring (Fadenring)

Der Magische Ring ist die sauberste Art, um runde Projekte wie Amigurumis, Kürbisse oder Bälle zu beginnen. Du häkelst die erste Runde direkt in einen anpassbaren Fadenring und ziehst ihn anschließend so fest zu, dass **kein Mittelloch** mehr sichtbar ist.

So geht's: Lege den Faden um zwei Finger, schiebe die Nadel unter den vorderen Faden, hole den hinteren Faden durch, arbeite eine Luftmasche als Wende – und schon kannst du die festen Maschen in den Ring häkeln. Zum Schluss am kurzen Fadenende fest anziehen – fertig!

Alternativ für Ungeduldige: **2 Luftmaschen anschlagen** und die festen Maschen in die **2. Luftmasche von der Nadel** häkeln.

## 2. Die unsichtbare Abnahme

Bei normalen Abnahmen entsteht oft ein unschönes Loch. Mit der **unsichtbaren Abnahme** (invisible decrease) bleibt dein Maschenbild sauber und gleichmäßig:

1. **Nadel in die vordere Maschenglied** der 1. festen Masche einstechen – Faden noch nicht holen.
2. **Nadel in die vordere Maschenglied** der 2. festen Masche einstechen.
3. **Faden holen** – jetzt 3 Schlingen auf der Nadel.
4. **Faden holen und durch die ersten zwei Schlingen ziehen**, danach **Faden holen und durch alle Schlingen ziehen**. Fertig!

## 3. Yarn-Under-Technik (unsere Empfehlung)

Normalerweise häkelst du eine feste Masche mit "Yarn Over" – bei diesem Muster verwenden wir stattdessen **Yarn Under**. Dadurch entsteht ein besonders **sauberes, diagonales Maschenbild** ohne schiefe Runden, und die Füllwatte schaut weniger leicht durch.

So geht Yarn Under bei einer festen Masche:
1. Nadel in die nächste Masche einstechen.
2. **Den Faden unter der Nadel entlang führen** (statt darüber) und durch die Masche ziehen.
3. Nun normal fertig häkeln: Faden über die Nadel legen und durch beide Schlingen ziehen.

Es klingt komplizierter als es ist – nach 3–4 Maschen hast du es raus!

## 4. Öffnung zuschließen (mit der Häkelnadel)

Wenn der Kürbis fast zu ist, bleiben nur noch wenige Maschen offen. Statt mit der Nadel zu nähen, geht es so ganz einfach:
1. Nadel **von innen nach außen** durch nur das vordere Maschenglied der nächsten Masche führen.
2. Faden durchziehen.
3. Das in jedem offenen vorderen Maschenglied wiederholen.
4. Am Ende am Faden **fest ziehen** – die Öffnung schließt sich wie ein Beutel.
5. Fadenende sauber ins Innere ziehen und verstecken.

💡 **Arbeitshinweis:** Wir häkeln alle Teile **in Spiralrunden** (joined rounds). Das heißt: keine Kettmaschen zum Verbinden, keine Wenderei. Markiere dir den Rundenanfang mit einem Maschenmarkierer und schiebe ihn jede Runde eine Position weiter!

---

# 🎃 Der große Kürbis (ca. 13 cm hoch × 15 cm breit)

Wir beginnen mit dem großen Kürbis. Nimm dir deine 8 mm-Nadel und das orangene Bulky-Garn zur Hand.

### Anleitung Körper (in Spiralrunden)

- **Runde 1:** 8 fM in einen Magischen Ring [8] – Faden schön fest anziehen, damit kein Loch bleibt.
- **Runde 2:** 8 Zun [16] – in jede Masche 2 feste Maschen häkeln.
- **Runde 3:** (1 fM, 1 Zun) × 8 [24] – abwechselnd 1 feste Masche, 1 Zunahme.
- **Runde 4:** (3 fM, 1 Zun) × 6 [30] – vier Maschen Muster, sechsmal wiederholen.
- **Runde 5:** 1 fM, 1 Zun, (4 fM, 1 Zun) × 5, 3 fM [36] – die letzten Zunahmen vor dem geraden Teil.
- **Runden 6–10 (insgesamt 5 Runden):** 1 fM in jede Masche [36] – gerade nach oben häkeln, hier bekommt der Kürbis seine Höhe.
- **Runde 11:** 1 fM, 1 Abn, (4 fM, 1 Abn) × 5, 3 fM [30] – jetzt beginnt das sanfte Verjüngen.
- **Runde 12:** (3 fM, 1 Abn) × 6 [24]
- **Jetzt Füllwatte einfüllen!** Stopfe den Kürbis langsam und gleichmäßig – aber **nicht zu voll**, sonst wird er später zu hart und rundlich. Die Form sollte weich bleiben.
- **Runde 13:** (1 Abn, 2 fM) × 6 [18]
- **Runde 14:** (1 fM, 1 Abn) × 6 [12] – fülle jetzt den Rest Watte nach oben, sodass die Kanten schön gefüllt sind.
- **Runde 15:** 6 Abn [6]

Schneide den Faden **sehr lang ab** (min. 50 cm). Schließe die Öffnung wie im Technik-Teil beschrieben und ziehe fest.

Jetzt kommt der wichtigste Schritt für die typische **Kürbis-Form**: Nimm den langen Faden und nähe ihn vom unteren Zentrum (Anfang) durch das Innere nach oben zum oberen Zentrum (Ende) und ziehe leicht an. Wiederhole diesen Vorgang 6–8 mal, indem du den Faden **zwischen die einzelnen Rillen** außen durch den Kürbis ziehst und oben und unten am Zentrum festmachst. Dadurch entstehen die typischen **6 bis 8 Kürbis-Rillen**, die ihn wie einen echten Kürbis aussehen lassen. Zum Schluss alle Fadenenden gut vernähen.

---

# 🍂 Stiel und Blätter für den großen Kürbis

Nimm die **3,5 mm-Nadel** und das braune Worsted-Garn.

### Stiel (in Runden)

- **Runde 1:** 6 fM in den Magischen Ring [6]
- **Runde 2:** 6 Zun [12]
- **Runden 3–6 (insgesamt 4 Runden):** 1 fM in jede Masche [12] – der Stiel bekommt seine Höhe.
- **Runde 7:** (1 fM, 1 Abn) × 4 [8]
- **Runden 8–9 (insgesamt 2 Runden):** 1 fM in jede Masche [8]

Mache eine **Kettmasche in die nächste Masche** zum Abrunden. Faden lang abschneiden, den Stiel **fest mit Füllwatte stopfen** (er soll später nicht umknicken!).

Nähe den Stiel mit der Wollnadel mittig auf die Oberseite deines Kürbisses – nähe durch die letzten geschlossenen Maschen am Zentrum, sodass er stabil sitzt.

### Blätter (grünes Garn, 3,5 mm-Nadel)

Wir häkeln ein **langes Blatt** und direkt daran ein **kurzes Blatt** – beide werden später neben den Stiel genäht.

#### Langs Blatt
- 20 **Luftmaschen** anschlagen.
- Ab der **2. Lm von der Nadel** in jede Lm eine **Zunahme** (2 fM) häkeln. [38 fM] – fertig ist das lange, spitze Blatt.

#### Kurzes Blatt (direkt danach, ohne den Faden abzuschneiden)
- 9 **Luftmaschen** anschlagen (= Ch 9).
- Ab der **3. Lm von der Nadel** im Muster wiederholen: (1 Kettm, 1 Lm überspringen). Insgesamt ergibt das Muster **7 Kettmaschen** pro kurzes Blatt.

Schneide den Faden ab und lasse ein langes Ende zum Annähen.

Nähe die Blätter jetzt **seitlich an den Stiel**, sodass sie leicht vom Kürbis abstehen. Tipp: Lege die Blätter leicht gedreht an, damit es natürlicher wirkt.

---

# 🎃 Kleiner Kürbis (ca. 7,5 cm hoch × 10 cm breit)

Der kleine Kürbis wird ähnlich gearbeitet – nur in einer kompakteren Version. Perfekt zum Kombinieren!

### Anleitung Körper (8 mm-Nadel, Bulky-Garn)

- **Runde 1:** 8 fM in einen Magischen Ring [8]
- **Runde 2:** 8 Zun [16]
- **Runden 3–5 (insgesamt 3 Runden):** 1 fM in jede Masche [16] – der kleine Kürbis bleibt kompakt ohne weitere Zunahmen.
- **Runde 6:** 8 Abn [8]

Fülle den kleinen Kürbis **vorsichtig mit Füllwatte** (nicht zu voll!), schneide den Faden lang ab und schließe die Öffnung wie beim großen Kürbis. Forme auch hier wieder die typischen **Kürbis-Rillen** durch mehrmaliges Durchstechen von oben nach unten.

### Stiel klein (3,5 mm-Nadel, braunes Garn)

- **Runde 1:** 6 fM in den MR [6]
- **Runde 2:** (1 Zun, 1 fM) × 3 [9]
- **Runden 3–5 (insgesamt 3 Runden):** 1 fM in jede Masche [9]
- **Runde 6:** (1 fM, 1 Abn) × 3 [6]

Kettmasche zum Abschluss, Faden lang lassen und den Stiel stopfen. Auf den kleinen Kürbis mittig nähen.

### Blätter klein (grünes Garn, 3,5 mm-Nadel)

#### Langs Blatt (klein)
- 11 Luftmaschen anschlagen. Ab der **2. Lm von der Nadel** in jede Lm eine Zunahme [20]

#### Kurzes Blatt (klein)
- Direkt anschließend 9 Lm anschlagen. Ab der **3. Lm von der Nadel** im Muster: (Kettm, 1 Lm überspringen). Insgesamt **4 Kettmaschen**.

Faden abschneiden und die beiden Blätter seitlich neben den Stiel nähen.

---

# 💡 Extra-Tipps für den perfekten Kürbis

1. **Nicht zu voll stopfen!** Wenn du den Kürbis zu stark mit Watte füllst, wird er kugelrund und verliert die weiche Kürbis-Form. Besser etwas weniger füllen und anschließend durch die Rillen die Form definieren.
2. **Rillen sauber ziehen:** Arbeite die Rillen-Nähte **symmetrisch** (6 oder 8 gleichmäßig verteilte "Speichen" von oben nach unten). So bekommt der Kürbis einen echten Look.
3. **Herbstliche Farbpalette:** Kombiniere den Kürbis mit weiteren Kürbissen in **Beige, Senfgelb, Altrosa und Dunkelbraun** – auf einem dunklen Holzbrett in der Mitte des Tisses ein echter Hingucker!
4. **Kleine Kürbisse am Stiel:** Binde mehrere kleine Kürbisse an einem Stück Juteschnur zusammen – ergibt einen wunderschönen, mobilen Deko-Hänger für die Tür oder den Kamin.
5. **Duft-Kürbis:** Gib vor dem Stopfen ein paar Tropfen **Zimt- oder Kürbis-Gewürz-Duftöl** auf die innere Watte. Immer wenn du vorbeigehst, riecht es wie frisch gebackener Kuchen! 🥮

---

# 🎉 Herzlichen Glückwunsch! Dein Herbst-Kürbis ist fertig!

Du hast nun zwei (oder mehr!) wunderschöne, weiche Häkelkürbisse gezaubert, die jedes Zuhause gemütlicher machen.

Stelle sie auf den Couchtisch, auf das Sideboard, auf die Fensterbank oder schenke sie an Menschen, die du magst. Im Handumdrehen hast du **persönliche Herbst-Deko**, die mit Liebe gemacht ist.

Wenn du deinen Kürbis auf Instagram zeigst, verwende gerne den Hashtag **#MeinHäkelKürbis** – ich freue mich riesig darauf, deine bunten Kürbisse zu sehen! 🍂

Bis zum nächsten Häkelprojekt – happy hookin'! 🧶`,
    featuredImage: ccImage,
    featuredImageAlt: 'Häkelkürbis aus weichem Bulky-Garn in Orange mit gehäkeltem Stiel und Blättern, dekoriert auf einem herbstlichen Holzbrett',
    pinterestImage: ccImage,
    pinterestTitle: 'Einfacher Kürbis häkeln: Schnelle Herbst-Deko in 2 Größen',
    pinterestDescription: 'Häkle deinen eigenen weichen Kürbis für den Herbst! Ausführliche Schritt-für-Schritt-Anleitung mit genauer Maschenzählung für große und kleine Variante.',
    category: 'Home & Deko',
    tags: ['Kürbis häkeln', 'Herbst Deko', 'Anfänger Anleitung', 'Häkelkürbis', 'Bulky Garn', 'Tischdeko Herbst'],
    seoTitle: 'Einfacher Kürbis häkeln: Herbst-Deko in 2 Größen mit Anleitung',
    seoDescription: 'Schnelle Häkelanleitung für weiche Kürbisse in 2 Größen. Mit genauer Maschenzählung, Techniken (Magic Ring, Yarn Under, invisible Dec) und Materialtipps für Anfänger.',
    published: true,
    publishedAt: '2026-09-11',
    createdAt: '2026-09-11',
    updatedAt: '2026-09-11',
    readingTime: '15 Min. Lesezeit',
    author: defaultAuthor,
  },
];
