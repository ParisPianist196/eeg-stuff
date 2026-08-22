# eeg-stuff
Doing EEG 


## Overall Goal
Use my eeg electrodes to read brain waves (probably just the larger or easier to detect frequencies)

## Approach
[Instructable that inspired this](https://www.instructables.com/DIY-EEG-and-ECG-Circuit/)

**Stuff I Already Have**
- Arduino Mega
- Raspberry Pi
- Cheap Oscilloscope
- Multimeter
- [JFET IC OpAmp 14DIP TL084BCN](https://www.ti.com/lit/ds/symlink/tl084.pdf?HQS=dis-dk-null-digikeymode-dsf-pf-null-wwe&ts=1787409812922&ref_url=http%253A%252F%252Fwww.baidu.com%252F)
- Another JFET IC OpAmp 14SO TL084CD
    - Dip setup, not usable
- Disposable Gold 9mm Cup EEG Electrode 40" 10 pack from DyMedix
- Resistors:
    - 220
    - 10k
    - 5k
    - 1M
    - 2k
    - 1k
    - 10
    - 100k
    - 100
    - 330
- Transistor (I think?) TO-92
- AD620AN
    - No luck :(( I think they just don't work
- [HX711](https://www.sparkfun.com/sparkfun-load-cell-amplifier-hx711.html)

### Future Plans:
1. Do preprocessing with my opAmps
    - Bandpass
    - Amp signal
    - Notch filter for 60hz noise
1. Upgrade to a nicer ADC

## Shopping list
- 5k Potentiometer
- Capacitor
- Bench signal generator cause this pwm stuff is annoying
