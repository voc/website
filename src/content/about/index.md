---
title: "About c3voc"
---

![](header.jpg)

CCC Video Operation Center is a working group consisting of Chaos Computer Club enthusiasts running lecture recording and streaming infrastructure on and for different chaos events or conferences.

This page only gives a small overview of what we are doing, our [Wiki](https://c3voc.de/wiki/) contains a lot more information.

# Streaming

During events we provide livestreams in various formats so that basically most devices should be able to play at least one of them.

Using our own equipment we are pulling the content directly from our encoding boxes, in any other case we are able to ingest RTMP-streams using e.g. OBS.
Other formats might be possible, as long as either ffmpeg or gstreamer can receive it.

# Recordings

We are operating media.ccc.de together with the media group of (mostly) the CCC Cologne.

It's generally open for hackerspaces and events near to the CCC, head over to our [Wiki](https://c3voc.de/wiki/faq#we_are_a_hackerspace_activist_group_ccc_erfa_conference_can_you_publish_our_content_on_mediacccde) for more information.

# Equipment

Over the years we've collected equipment for multiple streaming+recording setups, adaptable to most univerisities lecture halls.

This equipment basically consists of a camera, a encoder/recorder box with inputs for camera and slides, an audio mixer with wireless microphones and lots and lots of cables.

Head over to our [Wiki](https://c3voc.de/wiki/hardware) for more information.

# Tooling

We've written a lot of tooling, here a short overview:

- [voctomix](https://github.com/voc/voctomix) our video mixer used during on-site events
- [voctoweb](https://github.com/voc/voctoweb) the system behind media.ccc.de
- [intro-outro-generator](https://github.com/voc/intro-outro-generator) tooling for creating animated intros with embedded information for each talk
- [cm](https://github.com/voc/cm) our ansible based configuration management, used for most of our infrastructure
- [kevin](https://github.com/voc/kevin) a WIP fully open replacement for OBS.Ninja
- [wink](https://github.com/voc/wink) our inventory and transport planning tool
- [tracker](https://github.com/crs-tools/tracker) our centralised recording manager / ticket system

And lots more.. head over to our [GitHub](https://github.com/voc) page for more projects.

# Thanks

As we'd like to keep our content and its delivery as neutral as possible and want to stay independent from any third-party we usually don't promote our partners and sponsors.

We kinda feel bad about that, as they are making most of our work possible, so here we'll take the chance to thank some of our long-time partners.

Thanks to [Selfnet e.V.](https://www.selfnet.de) for allowing us to host servers at your datacenter,  
Thanks to [rrbone](https://www.rrbone.net) for allowing us to host servers at your datacenters and for providing a mirror for media.ccc.de,  
Thanks to [OpenSuse](https://www.opensuse.org) and [//SEIBERT/MEDIA](https://seibert-media.net) for your time and equipment,  
Thanks to [FeM e.V.](https://fem.tu-ilmenau.de) for your time and for allowing us to host servers at your datacenter.

And a **huge** thanks to all the people who helped us during events, lent or gave us equipment over all these years, or were just superb human (or cyborg) beings in any other way :)
