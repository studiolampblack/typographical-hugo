# Typographical

This is a port of the [Tale theme for Jekyll](https://github.com/theramiyer/typographical) to Hugo based on [Tale theme for Hugo](https://github.com/EmielH/tale-hugo). Typographical is a typography-focused theme, based on Tale, which is a minimal Jekyll theme curated for storytellers. Checkout the demo of Tale [here](https://chesterhow.github.io/tale/), and a demo of Typographical [here](https://blog.ramiyer.me).

## A quick look

Here is a quick look at the theme.

A post with **emphasis on the title**, **drop-cap** and first line in **small-caps** to ease into the paragraph. Custom FontAwesome icons in the top bar, configurable within config.toml.

![A post with emphasis on the title, drop-cap and first line in small-caps to ease into the paragraph. Custom FontAwesome icons in the top bar, configurable within config.toml.](https://blogfiles.ramiyer.me/2020/images/Screenshot_2020-10-02-Hello-Hugo.png)

**Table of contents** as required and Spotify embed.

![Table of contents as required and Spotify embed.](https://blogfiles.ramiyer.me/2020/images/Screenshot_2020-10-02-Can-we-be-free-of-Chinese-goods.png)

**Embeddable charts**, support for raw HTML.

![Embeddable charts, support for raw HTML.](https://blogfiles.ramiyer.me/2020/images/Screenshot_2020-10-02-Can-we-be-free-of-Chinese-goods(1).png)

**Related posts** and **share buttons** (Twitter gets hash tags based on post tags).

![Related posts and share buttons (Twitter generates hash tags based on post tags).](https://blogfiles.ramiyer.me/2020/images/Screenshot_2020-10-02-Archive(2).png)

Embeddable **YouTube video** where you can specify start and end times to play a short clip.

![Embeddable YouTube video where you can specify start and end times to play a short clip.](https://blogfiles.ramiyer.me/2020/images/Screenshot_2020-10-02-Time-to-rethink-print-media.png)

Full UNICODE **character support** with diacritics.

![Full UNICODE character support with diacritics.](https://blogfiles.ramiyer.me/2020/images/Screenshot_2020-10-02-Reading-the-IAST.png)

**Small-caps** and **blockquote** that does not hit you with design, but stands out.

![Small-caps and blockquote that does not hit you with design, but stands out.](https://blogfiles.ramiyer.me/2020/images/Screenshot_2020-10-02-COVID-and-Credibility.png)

Archive page with **quick jumps to year and month**.

![Archive page with quick jumps to year and month.](https://blogfiles.ramiyer.me/2020/images/Screenshot_2020-10-02-Archive.png)

Reverse-chronological **arrangement of posts by year and month**.

![Reverse-chronological arrangement of posts by year and month.](https://blogfiles.ramiyer.me/2020/images/Screenshot_2020-10-02-Archive(1).png)

**Instant search** within the archive page.

![Instant search within the archive page.](https://blogfiles.ramiyer.me/2020/images/Screenshot_2020-10-02-Archive(2).png)

**Tables** and block quotes that are **functional, and look good**.

![Tables and block quotes that are functional, and look good.](https://blogfiles.ramiyer.me/2020/images/Screenshot_2020-10-02-Transparency-on-ventilator.png)

## Installation

### 1. Install the theme

If your site is also under version control using git, the easiest way to install this theme is to add it as a submodule. If you have not created a git repo for your project yet, you need to run `git init` beforehand. Inside the folder of your Hugo site, run the following command.

```bash
git submodule add https://github.com/theramiyer/typographical-hugo.git themes/typographical
```

Alternatively, you can clone the theme into your project.

```bash
git clone https://github.com/theramiyer/typographical-hugo.git themes/typographical
```

### 2. Configure Hugo

Add the following line to `config.toml` to tell Hugo to use the theme.

```toml
theme = "typographical"
```

Alternatively, you can tell Hugo to use the theme with the `server` command.

```bash
hugo server -t typographical
```

### Additional information

For more information, read the official [setup guide](https://gohugo.io/overview/installing/) of Hugo.

### Update the theme

If you have installed the theme as a git submodule, you can update the theme by issuing the following command inside your project folder.

```bash
git submodule update --remote --rebase
```

If you have cloned the theme, you can run `git pull` inside the theme folder.

## Configuration

### Menu

The top menu uses [Hugo Menus](https://gohugo.io/content-management/menus/), with the name of the menu being `main`. To turn on the menu, follow the steps there - you can either add something like this to the front-matter of your pages:

```toml
menu = "main"
```

... or you can add a menu section to your `config` file:

```toml
sectionPagesMenu = "main"
```

Or if you want more control, add a specific entry for each item in your menu:

```toml
[menu]
  [[menu.main]]
    identifier = "about"
    name = "About"
    title = "About"
    url = "/about/"
    weight = 0
  [[menu.main]]
    identifier = "posts"
    name = "Posts"
    title = "Posts"
    url = "/post/"
    weight = 0
```

For menu internationalization/translation, see [Multilingual Mode: Menus](https://gohugo.io/content-management/multilingual/#menus).

### Internationalisation (i18n)

Tale supports using other languages than English. Language files for the texts Tale uses are provided in the `i18n` directory. The default language is English. To switch languages, add the key `defaultContentLanguage` to your `config.toml` file. For example:

```toml
defaultContentLanguage = "nl"
```

To translate texts your site uses, add an `i18n` folder to your site.

Feel free to submit pull requests for other translations of Tale's texts.

[Hugo documentation for multilingual sites](https://gohugo.io/content-management/multilingual/)

### Custom summaries

Tale allows for writing the summary of your posts manually by setting the `summary` variable in the page frontmatter. If this variable is not set, the summary that Hugo automatically generates will be used.

### Taxonomies

Tale has basic support for taxonomies. Taxonomy and terms pages will be generated when you have defined taxonomies, but you need to include links to these pages yourself. For example, you can add a link to a taxonomy page in `header-menu.html`.

### Placeholder partials

The theme contains placeholder partials to make the theme more flexible and easier to adapt to your site without having to change the theme itself. These are:

- `single/header.html`
- `single/footer.html`

These are included in the template for a single post, at the top of the post (below the title) and at the bottom of the post, respectively. These can be used, for example, to include additional information about the post author or for related posts. Create a file `/layouts/partials/single/header.html` or `footer.html` on your own site to have it included.

- `index/introduction.html`

This partial is included at the top of the list of posts on the index page, allowing you to add an introduction to your site.

### Copyright message

The copyright message in the footer uses the name of the author of the site, as defined in `config.toml`. For example:

```toml
[Author]
    name = "Emiel"
```

### Additional CSS files

The theme can load additional CSS files for you, e.g. to override some of the styles, or the CSS that goes with a component that you're using. To add additional CSS files, put these files in the `static` folder of your site and add the `css` parameter to `config.toml`, like so:

```toml
[Params]
    css = ["custom.css"]
```

To load multiple CSS files, use the parameter like this:

```toml
[Params]
    css = ["custom.css", "custom2.css"]
```

### Typographical hyphenation

Hyphenation does not work on Chrome and Chromium-based browsers. To ensure a consistent look as well as better reading experience (given that browsers still cannot justify text in a balanced fashion), this theme uses Hyphenopoly to insert soft hyphens where words can break. This way, Chromium-based browsers render the hyphens. The CSS also has the appropriate configuration to handle this.

To enable hyphenation, add the following key to your site config:

```toml
[Params]
    enableTypographicalHyphenation = true
```

Do note that enabling Hyphenopoly-based hyphenation will lead to Google Pagespeed Insights showing you an "opportunity" involving the word pattern dictionary used by Hyphenopoly.

### Devanāgari Support

Devanāgari, according to me, is one of the most beautiful scripts created by mankind. Typographical supports Devanāgari for those who would like to include Sanskrit or Hindi (or any other language, for that matter) text, written in the script. The theme uses the Sahitya font, which is part of the Alegreya super-family---this maintains the visual feel of the content.

To enable support for Devanagari text using the Sahitya font add the following to your site config:

```toml
[Params]
    enableDevanagari = true
```

### Plausible Analytics

This theme supports Plausible Analytics as an alternative to (or along with) Google Analytics. To enable and configure Plausible Analytics, add at least the following to your `config.toml` file:

```toml
[params.plausible]
  enable = true  # Whether to enable plausible tracking
  domain = "example.com"  # Plausible "domain" name/id in your dashboard
```

For more configuration options, check out the project Wiki.

### Theme customisation

The theme contains options to customise the font, enable or disable drop-caps, accent colour, contact form, etc. The Wiki contains more information on these options.

For detailed customisation options, go to the project wiki.

## Acknowledgments

Thanks

- to [Emiel Hollander](//github.com/EmielH) for creating the [Tale theme for Hugo](https://github.com/EmielH/tale-hugo),
- to [Chester How](//github.com/chesterhow) for creating the original [Tale theme for Jekyll](https://chesterhow.github.io/tale/),
- to [onedrawingperday](//github.com/onedrawingperday), [bep](//github.com/bep) and [digitalcraftsman](//github.com/digitalcraftsman) for their help in getting the theme working correctly with Hugo,
- to [lucperkins](https://github.com/lucperkins) for the [Fresh theme](https://github.com/lucperkins/hugo-fresh) from which some useful snippets of code have been used.
- to [divinerites](https://github.com/divinerites) for [plausible-hugo](https://github.com/divinerites/plausible-hugo) from where the Plausible Analytics partials have been gotten.

## License
See [LICENSE](https://github.com/theramiyer/typographical-hugo/blob/master/LICENSE).
