const int ADC_PIN = A1;

void setup() {
  Serial.begin(115200);
}

void loop() {
  int raw = analogRead(ADC_PIN);

  float voltage = raw * (5.0 / 1023.0);

  Serial.print(raw);
  Serial.print(",");
  Serial.println(voltage, 4);

  delay(10);  // ~100 samples/sec
}