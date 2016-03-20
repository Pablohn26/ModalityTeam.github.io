---
layout: controllers
title: "Arturia Beatstep (Rel16 custom)."
hwInterface: "midi"
vendorURI: "https://www.arturia.com/products/hybrid-synths/beatstep"
manual: "http://downloads.arturia.com/products/beatstep/manual/BeatStep_Manual_1_0_1_EN.pdf"
type: "multiController"
notes: |
  - Desc file for use with HH's custom HW Template "Relatively#1Global":

  - all knobs send Relative mode #1 with fast Acceleration

  - all controllers send on global channel

  - only for Relative mode: sends CCvalues 63/65 for dec/inc, a maximum of 42, 86 with Fast Acceleration

  - 16 glob. MIDI channels can be easily switched on HW (CHAN Button plus 1 of 16 Pads), so use that as 16 pages w' identical cc/midi nr's.

  - alternatively/additionally, 16 layout 'templates' with different CC assignments could be created and easily switched on HW (RECALL Button plus 1 of 16 Pads), but that's a lot of work to edit, and 256 pages are a bit too much anyways?

  - can MMC be read? For now, the 2 transport buttons are remapped to NoteOn/Offs.

  ToDo:

  -add paging via 16 MIDI Chans

  


description: |
  A multiController midi device.


features: |
  + 16 drum pads with velocity and polyphonic aftertouch
  + 16 rotary encoders; supporting absolute and dec/inc mode
  + 1  BIG rotary encoder; supporting absolute and dec/inc mode
  + 2  Buttons: play, pause, that send MMC by default

status: |
  + *osx* -- tested and working. 2015-03-15, adc
  + *linux* -- unknown
  + *win* -- unknown

---