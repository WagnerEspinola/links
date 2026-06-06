import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 62,
  },

  title: {
    color: colors.green[900],
    fontSize: 22,
  },

  header: {
    paddingHorizontal: 24,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  },

  logo: {
    width: 38,
    height: 32,
  },

  links: {
    borderTopWidth: 1,
    borderTopColor: colors.gray[600],
  },

  linksContent: {
    gap: 20,
    padding: 20,
    paddingBottom: 100,
  },
  modal: {
    flex: 1,
    justifyContent: "flex-end",
  },

  modalContent: {
    backgroundColor: colors.gray[900],
    borderTopWidth: 1,
    borderTopColor: colors.gray[800],
    paddingBottom: 32,
    padding: 24,
  },

  modalHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },

  modalCategory: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    color: colors.gray[400],
  },

  modalLinkName: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.gray[200],
  },

  modalLinkUrl: {
    fontSize: 14,
    color: colors.gray[400],
  },
});
