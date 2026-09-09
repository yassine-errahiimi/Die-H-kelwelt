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
];
