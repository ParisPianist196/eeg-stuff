const int ADC_PIN = A1;

void setup() {
  Serial.begin(115200);
}

void loop() {
  Serial.println(analogRead(A0));

  delay(10);  // ~100 samples/sec
}