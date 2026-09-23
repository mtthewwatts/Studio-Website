---
title: Two Axis Machine
year: "2025"
order: 4
excerpt: An STM32-based two-axis motor control system with ADC potentiometer speed control and interrupt-driven limit switch handling, validated through oscilloscope latency testing.
imageSrc: /projects/two-axis-machine/banner.png
---

*This project outline will be expanded in the future, but this should outline some of the work that was done in the mean time :)*

**EMBEDDED   |   ADC   |   SIGNALING   |   MOTOR-CONTROL   |   INTERRUPTS**

Two-Axis Machine — Course Project.

## Challenge

The STM32-based motor control system suffered from unreliable limit switch detection, noisy ADC readings, and unsafe motor behavior during direction changes, limiting system reliability and repeatability.

## Solution

Designed a robust embedded control system using ADC-based potentiometer speed control and interrupt-driven limit switch handling. Calibrated and optimized ADC resolution, sampling time, and clock settings, implemented safe motor stopping and reversal logic, and validated performance through oscilloscope-based latency testing.

## Learning

Developed strong practical skills in embedded systems design, including ADC characterization, interrupt architecture, and motor control. Learned to balance latency, noise robustness, and hardware safety, and to design firmware that handles real-world edge cases reliably.

## The System

*Microcontroller*

![Microcontroller wiring](/projects/two-axis-machine/img00.png)

*Block diagram*

![System block diagram](/projects/two-axis-machine/img01.png)

*Two-axis system*

![The assembled two-axis system](/projects/two-axis-machine/img02.png)
