import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.root}>
      {/* Background layers */}
      <View style={styles.bgTop} />
      <View style={styles.bgBottom} />

      <View style={styles.card}>
        <Text style={styles.title}>EXPO APPLICATION SERVICE</Text>
        <Text style={styles.subtitle}>Welcome back. Sign in to continue.</Text>

        <Pressable
          accessibilityRole="button"
          onPress={() => alert("Login")}
          style={({ pressed }) => [
            styles.primaryButton,
            pressed && styles.primaryButtonPressed,
          ]}
        >
          <Text style={styles.primaryButtonText}>Login</Text>
        </Pressable>

        <Text style={styles.footerHint}>
          Tip: Customize this screen in src/app/index.tsx
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 18,
  },
  bgTop: {
    position: "absolute",
    left: -80,
    top: -120,
    width: 360,
    height: 360,
    borderRadius: 180,
    backgroundColor: "#4F46E5",
    opacity: 0.22,
    transform: [{ rotate: "-12deg" }],
  },
  bgBottom: {
    position: "absolute",
    right: -90,
    bottom: -160,
    width: 420,
    height: 420,
    borderRadius: 210,
    backgroundColor: "#06B6D4",
    opacity: 0.18,
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.92)",
    borderRadius: 18,
    paddingVertical: 26,
    paddingHorizontal: 18,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.12,
    shadowRadius: 18,
    elevation: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: "800",
    color: "#111827",
    textAlign: "center",
    letterSpacing: 0.3,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 20,
  },
  primaryButton: {
    width: "100%",
    backgroundColor: "#4F46E5",
    paddingVertical: 13,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryButtonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.99 }],
  },
  primaryButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
  footerHint: {
    marginTop: 14,
    fontSize: 12,
    color: "#9CA3AF",
    textAlign: "center",
  },
});
