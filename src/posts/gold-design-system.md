---
title: Celebrating the launch of GOLD Design System 🚀
date: '2021-09-21'
tags: [announcements, releases]
description: GOLD Design System has been published and available to be used in place of the Australian Government Design System   
permalink: posts/{{ title | slug }}/index.html
---

Today marks the launch of GOLD Design System, replacing the Australian Government Design System.

* 🚀 Docs are available at [https://gold.designsystemau.org/](https://gold.designsystemau.org/)
* 🚀 Npm packages have been published at [@gold.au](https://www.npmjs.com/org/gold.au)
* 🌟 The design system has been renamed from Australian Government Design System to GOLD Design System

To continue to benefit from future updates to the Design System, including security patches, see bottom of page for [Migration details](#migration-details). 
 
### Reasons for changing the name to GOLD
 
Some might remember GOLD was the original name of the design system - the Government Open Language of Design.

<img src="/images/previous-gold-docs.png" style="box-shadow: 1px 1px 10px #cccccc; border: 1px solid #e5e5e5;" />

As the curatorship of Australian Government Design System by the Digital Transformation Agency ends, we thought it would be appropriate to bring GOLD back! 

The Technical Steering Committee (TSC) agreed to a name change via Request for Change (RFC) process, full details can be read at the [pull request](https://github.com/designsystemau/RFCs/pull/8/files).  

From the RFC:

<blockquote>
<p style="font-style: italic; border-left: 4px solid #e5e5e5; padding-left: 16px;">Having a fun name (as opposed to a plain language name) has the effect of "creating shared language" and is better to "excite people about working together, "particularly non-technical people. That this is beneficial for "creating unity and delight" and gives your people an identity. - Dominik Wilkowski</p>
</blockquote>

We hope that restoring the name GOLD will help invigorate the community.   

 
### New docs site

Documentation is now available at [https://gold.designsystemau.org/](https://gold.designsystemau.org/).

<img src="/images/gold-docs.png" style="box-shadow: 1px 1px 10px #cccccc; border: 1px solid #e5e5e5;" />

Developers should refer to this site instead of the DTA's docs site which will go offline at the end of the month. 
 
The source code for Docs can be found at [Github](https://github.com/designsystemau/gold-design-system-site).
 

### New npm packages

Npm packages are available at the [@gold.au organisation](https://www.npmjs.com/org/gold.au).

<img src="/images/npm-org.png" style="box-shadow: 1px 1px 10px #cccccc; border: 1px solid #e5e5e5;" />

If you're using modules, you now install packages like:

    npm install @gold.au/button
    
Alternatively, the starter repo can be used: [https://github.com/designsystemau/design-system-starter](https://github.com/designsystemau/design-system-starter).

The source code for the Design System can be found at [Github](https://github.com/designsystemau/gold-design-system). 

<h3 id="migration-details">Migration details</h3>

1. Update code to change npm references from:

    <code style="display: block; padding: 16px 16px; margin-top: 1em; margin-bottom: 2em;">
    @gov.au/buttons → @gold.au/buttons
    </code>
   

2. Update package versions to the next major release: 

    `"@gov.au/buttons": "3.0.8"` → `"@gold.au/buttons": "4.0.0"`
    

    _Alternatively_, uninstall all `@gov.au` modules: 
    
    <code style="display:block; font-size: 12px; margin-top: 12px;">
    npm uninstall @gov.au/accordion @gov.au/animate @gov.au/body @gov.au/breadcrumbs @gov.au/buttons @gov.au/callout @gov.au/card @gov.au/control-input @gov.au/core @gov.au/cta-link @gov.au/direction-links @gov.au/footer @gov.au/form @gov.au/grid-12 @gov.au/header @gov.au/headings @gov.au/inpage-nav @gov.au/keyword-list @gov.au/link-list @gov.au/main-nav @gov.au/page-alerts @gov.au/progress-indicator @gov.au/responsive-media @gov.au/searchbox @gov.au/select @gov.au/side-nav @gov.au/skip-link @gov.au/table @gov.au/tags @gov.au/text-inputs
    </code>

    then reinstall as `@gold.au` <code style="color:#e96900;">@latest</code> modules, for instance:
     
    <code style="display:block; font-size: 12px; margin-top: 12px;">
    npm i @gold.au/accordion@latest @gold.au/animate@latest @gold.au/body@latest @gold.au/breadcrumbs@latest @gold.au/buttons@latest @gold.au/callout@latest @gold.au/card@latest @gold.au/control-input@latest @gold.au/core@latest @gold.au/cta-link@latest @gold.au/direction-links@latest @gold.au/footer@latest @gold.au/form@latest @gold.au/grid-12@latest @gold.au/header@latest @gold.au/headings@latest @gold.au/inpage-nav@latest @gold.au/keyword-list@latest @gold.au/link-list@latest @gold.au/main-nav@latest @gold.au/page-alerts@latest @gold.au/progress-indicator@latest @gold.au/responsive-media@latest @gold.au/searchbox@latest @gold.au/select@latest @gold.au/side-nav@latest @gold.au/skip-link@latest @gold.au/table@latest @gold.au/tags@latest @gold.au/text-inputs@latest
    </code>
    
    The code change will look like this: 
    
    <img src="/images/gold-pr-diff.png" style="box-shadow: 1px 1px 10px #cccccc; border: 1px solid #e5e5e5;" />
    
    
Practitioners are also invited to contribute directly at [GitHub](https://github.com/designsystemau/gold-design-system) or through joining our [Slack community](https://designsystemau-slack.herokuapp.com/). 

<br />


Onwards!
