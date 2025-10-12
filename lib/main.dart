import 'package:flutter/material.dart';
import 'screens/register_screen.dart';

void main() {
  runApp(const RegistrarApp());
}

class RegistrarApp extends StatelessWidget {
  const RegistrarApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Registrar Requesting App',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: const RegisterScreen(),
    );
  }
}
