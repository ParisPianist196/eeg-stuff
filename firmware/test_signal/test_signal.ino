const int signalPin1 = 8;
const int signalPin2 = 6;

void setup() {
  pinMode(signalPin1, OUTPUT);
  pinMode(signalPin2, OUTPUT);
}

void loop() {
  digitalWrite(signalPin1, HIGH);
  digitalWrite(signalPin2, HIGH);
  delay(250);

  digitalWrite(signalPin1, LOW);
  digitalWrite(signalPin2, LOW);
  delay(250);
}