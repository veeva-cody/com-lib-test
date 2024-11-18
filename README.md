# Veeva Component Library
##### Introduction
The Veeva Component Library is a collection of HTML snippets, combined with CSS and JS bundles, derived from a design system for the purposes of building modular WordPress templates. 

---
##### Table of Contents
- [Veeva Component Library](#veeva-component-library)
        - [Introduction](#introduction)
        - [Table of Contents](#table-of-contents)
        - [Build Tools](#build-tools)
        - [Folder Organization](#folder-organization)
        - [Icons](#icons)
        - [Foundations](#foundations)
        - [Components](#components)
        - [Blocks](#blocks)
        - [Modifiers](#modifiers)

##### Build Tools
- Scripts and styles are compiled using Rollup. `npm run start` will build the bundles, listen for changes and start a live reloading server at **localhost:10001**. You can view the library at http://localhost:10001/docs/.
- `npm run build` will also build the bundles and remove some unnecessary code for production use.

##### Folder Organization
- `lib` contains all of the individual HTML snippets with [content-markers] in place of actual content for the purpose of brevity. 
- `preview` is the base folder for the previewable library of blocks. When a new block (or block variant) is added to the library, a matching entry should be added to the previewable library so non-developers can see the new addition.
- `templates` contains stubbed out versions of static WordPress templates. First drafts of new templates are often created here to test out look and feel before being converted to a PHP-based template in Pantheon; in some cases, static content is replaced with CMS-based (often referred to as "dynamic") content.
- `styles` contains all of the stylesheets, broken down by block/component/foundation.
- `js` contains all of the scripts, broken down by page/block.
- `wp-content` matches the folder structure of the live theme in WordPress and exists for the purposes of handing over assets. It is likely that this folder will be phased out with the Pantheon migration complete.
- Build configuration is defined in `rollup.config.js`.

##### Icons
- Icons live in `/wp-content/themes/veeva2015/assets/svg/icons`. 
- In order to render an icon, use the following tag `<span class="icon" data-icon="[id]" />` where `[id]` corresponds to the icon identifier as seen in the Figma Component Library. The identifier is the portion of the filename that preceeds the double hyphen. Identifiers are mapped to SVGs in the aforementioned folder.
- Secondary Button icons have been exported from Figma WITH negative space built it to ensure sizing remains consistent. New icons for Secondary Buttons should follow the same protocol.
- Secondary Button icons ARE NOT included in the general icon rendering format, as mentioned above. They are prefixed with "btn-".
- Run the following command in terminal to update the icon list locally after adding new icons in the folder for preview purpose:
``` zsh
cd shell-scripts/
chmod +x generate-icon-json.sh      // grant access to run locally
./generate-icon-json.sh
```
The icons.json will be updated in /docs/foundation/icons.json

##### Foundations
- Foundations are the most basic building block in our design system. They include such things as buttons, eyebrows, icons and more. 

##### Components
- Components are more complex than Foundations, but still building blocks in the system. They consist of Foundations and/or basic HTML elements. An example of a Component is a single card inside a group of cards.

##### Blocks
- Blocks are the complete modules that span the entire width of the page. They consist of Foundations, Components and/or basic HTML elements. 

##### Modifiers
- Within the lib section of the repo, snippets can be found for each of our Foundations, Components and Blocks. Customizable content in those snippets has been replaced with `[content]` markers, loosely named for the type of content that should replace the marker. Snippets with repeating elements contain comments that looks something like `<!-- [1-8x] -->` indicating the number of times the element can (or should) be repeated. Modifiers listed for a given item, such as **hero-centered--gradient**, are only to be applied to the top-level item in question. For example, you might see something like this:
```
<section class="hero-centered [modifier*]">
    <div class="container text-center">
        <h6>[overline]</h6>
        <h1>[headline]</h1>
        <p>[body]</p>
        <div class="d-flex justify-content-center align-items-center gap-3">
            <a class="button-primary [modifier^]" href="[url]" target="[target]">[label]</a>
            <a class="button-secondary [modifier^]" href="[url]" target="[target]">
                <img src="[src]" alt="">
                <span>[label]</span>
            </a>
        </div>
    </div>
</section>

<!--

Modifiers
---------

Required (one of) *:

hero-centered--gradient
hero-centered--image
hero-centered--logo
hero-centered--white
hero-centered--dark

Optional:

N/A

-->
```
The **hero-centered--gradient** modifier should only be applied to the root element, indicated by the '*'. Sub-element modifiers, in this case buttons, have their own set of modifiers indicated by the '^' that can be found in their respective snippet file.