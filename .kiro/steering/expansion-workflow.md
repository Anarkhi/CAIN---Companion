# Expansion Workflow

## Adding New Expansions

When implementing a new expansion/homebrew for CAIN Companion, follow these steps:

### 1. Image Extraction

Create two folders inside `Imagens/`:
- `<ExpansionName>` - For all extracted images from the PDF
- `<ExpansionName> - Usando` - For images currently in use by the app

Example:
```
Imagens/
├── LEBA_Association/           # All extracted images
└── LEBA_Association - Usando/  # Images in use
```

Extract all images from the expansion PDF into the first folder using PyMuPDF:

```python
import pymupdf
import os

pdf_path = "Referencias/<ExpansionName>.pdf"
output_dir = "Imagens/<ExpansionName>"

os.makedirs(output_dir, exist_ok=True)

doc = pymupdf.open(pdf_path)
img_count = 0

for page_num in range(len(doc)):
    page = doc[page_num]
    images = page.get_images(full=True)
    
    for img_index, img in enumerate(images):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        
        img_count += 1
        img_filename = f"prefix_p{page_num+1:02d}_{img_index+1:02d}.{image_ext}"
        img_path = os.path.join(output_dir, img_filename)
        
        with open(img_path, "wb") as f:
            f.write(image_bytes)

doc.close()
print(f"Total: {img_count} images extracted")
```

**Note:** PDFs with heavy graphic design will extract many small elements. Filter by size (>100KB or >200KB) to find the main artwork.

### 2. Content Implementation Order

1. **Agendas** - Add to `docs/js/bundle.js` in AGENDAS array with `expansion: '<id>'`
2. **Blasphemies** - Add to BLASPHEMIES array with passive and powers
3. **Sins** (if applicable) - Add to PT_CONTENT sin templates section
4. **Translations** - Add both EN and PT-BR strings:
   - Agenda names: `ag_<id>` in LOCALES
   - Blasphemy names: `bl_<id>` in LOCALES
   - agendaItems/boldedItems in PT_CONTENT.agendaItems
   - Ability descriptions in PT_CONTENT.abilities
   - Blasphemy descriptions in PT_CONTENT.blasphemyDescs
   - Flavor texts in PT_CONTENT.flavors
   - Passive descriptions in PT_CONTENT.passives
   - Power descriptions in PT_CONTENT.powers

5. **Register Expansion** - Add to EXPANSIONS array with:
   - `id`: lowercase identifier
   - `name`: Display name
   - `version`: Version string
   - `description`: EN description
   - `descriptionPt`: PT-BR description

### 3. Data Structure References

**Agenda structure:**
```javascript
{
  id: 'agendaId',
  name: 'Agenda Name',
  expansion: 'expansionId',
  agendaItems: ['Item text'],
  boldedItems: ['Bolded item text'],
  restriction: 'Restriction text or null',
  abilities: [
    { id: 'ability_id', name: 'Ability Name', description: '...' }
  ]
}
```

**Blasphemy structure:**
```javascript
{
  id: 'blasphemyId',
  name: 'Name', namePt: 'Nome',
  expansion: 'expansionId',
  flavor: 'Flavor text',
  description: 'Short description',
  passive: {
    id: 'passive_id',
    name: 'Name', namePt: 'Nome',
    description: '...'
  },
  powers: [
    {
      id: 'power_id',
      name: 'Name', namePt: 'Nome',
      tags: ['Tag1', 'Tag2'],
      burst: 'required|on_success|none',
      uses: 'rest|scene|null',
      description: '...'
    }
  ]
}
```

### 4. Existing Expansions

| ID | Name | Content |
|----|------|---------|
| gff1 | God-Fearing Flesh 1 | Virtues, Skins |
| gff2 | God-Fearing Flesh 2 | Additional content |
| gff3 | God-Fearing Flesh 3 | Mother blasphemy |
| gff4 | God-Fearing Flesh 4 | Gunpowder, Urban, Mythic, Diplomacy blasphemies |
| marchingeveronward | Marching Ever Onward | Pathfinder, Scholar, Hunter, Gambler agendas; Gravity, Author, Weaver blasphemies |
| leba | LEBA Association | Legion, YesMan, Human, Ghost agendas; Blood, Rotate, Cuisine, Egoism blasphemies; Husk, Garden sins |
