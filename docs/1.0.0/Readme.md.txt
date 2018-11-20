Project Layout

WhiteBridge - the complete solution
Common - Common library for all our needs(static library)
Red - Red side executable
Black - Black side executable
Gesher - Common functionality for Red and Black(static library)
ProtocolTester - Executable for testing protocol plug-ins
MockProtocol - Protocol implementation for internal testing (dynamic library + static integration tests)
YYYProtocol - Protocol implementation plug-in (dynamic library)

Each YYYProtocol implementation lays under WhiteBridge.

├── Black
├── XSD
├── Commons
│   ├── lib
│   │   ├── minini
│   │   └── plog-master
│   ├── src
│   └── test
├── ConvertorTest
│   ├── src
│   └── test
├── Gesher
│   ├── lib
│   ├── src
│   └── test
├── lib
├── MockProtocol
├── YYYProtocol
└── Red

Q & A

Q : Any prerequisites?
A : Yes. You should get gtest, gmock, boost, TBD

Q: How do I install dev machine
A: (???? steps from scratch!)

Q: How do I run tests?
A: Via IDE (TODO clicks and menus)

Q: How do I build
A: (TODO from IDE and from command line (it's the same btw))

Q: How to run all setup on dev machine
A: Run "RunLocalSimullatedEnv.bash"