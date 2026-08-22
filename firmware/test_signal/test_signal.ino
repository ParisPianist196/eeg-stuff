const int signalPin = 8;

void setup() {
  pinMode(signalPin, OUTPUT);
}

void loop() {
  digitalWrite(signalPin, HIGH);
  delay(250);

  digitalWrite(signalPin, LOW);
  delay(250);
}