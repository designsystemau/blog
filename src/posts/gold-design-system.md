---
title: Celebrating the launch of GOLD Design System 🚀
date: '2021-09-20'
tags: [announcements, releases]
description: GOLD Design System has been published and available to be used in place of the Australian Government Design System   
permalink: posts/{{ title | slug }}/index.html
---

Today marks the launch of GOLD Design System, replacing the Australian Government Design System.

* 🚀 Docs are available at [https://gold.designsystemau.org/](https://gold.designsystemau.org/)
* 🚀 Npm packages have been published at [@gold.au](https://www.npmjs.com/org/gold.au)
* 🌟 The design system has been renamed from Australian Government Design System to GOLD Design System

To continue to benefit from future updates to the Design System, including security patches, developers will need to: 
 
1. Update code to change npm references from:

    <code style="display: block; padding: 16px 16px; margin-top: 1em; margin-bottom: 2em;">
    @gov.au/buttons → @gold.au/buttons
    </code>
   

2. Update package versions to the next major release: 

    `"@gov.au/buttons": "3.0.8"` → `"@gold.au/buttons": "4.0.0"`

Full technical details covered in the [Migration docs](todo).

Practitioners are also invited to contribute directly at [GitHub](https://github.com/designsystemau/gold-design-system) or through joining our [Slack community](https://designsystemau-slack.herokuapp.com/). 

<br />


### Reasons for changing the name to GOLD
 
Some might remember GOLD was the original name of the design system, the Government Open Language of Design:

<img src="/images/gold-screen-shot.png" />

With the end of the curatorship of Australian Government Design System by the DTA, we thought it was appropriate to bring GOLD back! 

The Technical Steering Committee (TSC) agreed to a name change via Request for Change (RFC) process, full details can be read at the [pull request](https://github.com/designsystemau/RFCs/pull/8/files).  

From the RFC:

> having a fun name (as opposed to a plain language name) has the effect of "creating shared language" and is better to "excite people about working together, "particularly non-technical people. That this is beneficial for "creating unity and delight" and gives your people an identity.

We hope that changing the name back to GOLD will invigorate the community.  

 
### New docs site

Documentation is now available at [https://gold.designsystemau.org/](https://gold.designsystemau.org/).
 
Developers should refer to this site instead of the DTA's docs site which will go offline at the end of the month. 
 
The source code for Docs can be found at [Github](https://github.com/designsystemau/gold-design-system-site).
 

### New npm packages

Npm packages are available at the [@gold.au organisation](https://www.npmjs.com/org/gold.au).

If you're using modules, you now install packages like:

    npm install @gold.au/button
    
Alternatively, the starter repo can be used: [https://github.com/designsystemau/design-system-starter](https://github.com/designsystemau/design-system-starter).

The source code for the Design System can be found at [Github](https://github.com/designsystemau/gold-design-system). 
