import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

import React from "react";

function DocumentPdf({ data }) {
  const styles = StyleSheet.create({
    flexRow: { display: "flex", flexDirection: "row" },
    regularField: {
      textTransform: "uppercase",
      height: "1cm",
      textAlign: "center",
      paddingTop: "0.35cm",
    },
    fSLarge: { fontSize: "0.34cm" },
    fSMedium: { fontSize: "0.28cm" },
    fSSmall: { fontSize: "0.22cm" },
  });

  return (
    <Document style={{}}>
      <Page size="LETTER">
        <View
          style={{
            width: "18cm",
            height: "11.2cm",
            marginLeft: "1.3cm",
            display: "flex",
            flexDirection: "column",
            marginTop: "1.3cm",
          }}
        >
          <View style={[styles.flexRow, { marginTop: "2.42cm" }]}>
            <Text
              style={[styles.regularField, styles.fSLarge, { width: "25%" }]}
            >
              {data.lastName}
            </Text>
            <Text
              style={[styles.regularField, styles.fSLarge, { width: "25%" }]}
            >
              {data.lastNameMother}
            </Text>
            <Text
              style={[styles.regularField, styles.fSLarge, { width: "25%" }]}
            >
              {data.firstName}
            </Text>
            <Text
              style={[styles.regularField, styles.fSLarge, { width: "25%" }]}
            >
              {data.insuredNumber}
            </Text>
          </View>
          <View style={[styles.flexRow, { marginTop: "0.9cm" }]}>
            <Text
              style={[
                styles.regularField,
                styles.fSMedium,
                { width: "8.33%", marginTop: "4px", paddingTop: "0.36cm" },
              ]}
            >
              {data.birthDay}
            </Text>
            <Text
              style={[
                styles.regularField,
                styles.fSMedium,
                {
                  width: "8.33%",
                  marginTop: "4px",
                  paddingTop: "0.36cm",
                },
              ]}
            >
              {data.birthMonth}
            </Text>
            <Text
              style={[
                styles.regularField,
                styles.fSMedium,
                {
                  width: "8.33%",
                  marginTop: "4px",
                  paddingTop: "0.36cm",
                },
              ]}
            >
              {data.birthYear}
            </Text>
            <Text
              style={[
                styles.regularField,
                styles.fSMedium,
                {
                  width: "12.22%",
                  marginTop: "4px",
                  paddingTop: "0.36cm",
                },
              ]}
            >
              {data.gender}
            </Text>
            <Text
              style={[
                styles.regularField,
                styles.fSSmall,
                {
                  width: "16.64%",
                  marginTop: "4px",
                  paddingTop: "0.39cm",
                },
              ]}
            >
              {data.addressZone}
            </Text>
            <Text
              style={[
                styles.regularField,
                styles.fSSmall,
                {
                  width: "20.39%",
                  marginTop: "4px",
                  paddingTop: "0.39cm",
                },
              ]}
            >
              {data.addressStreet}
            </Text>
            <Text
              style={[
                styles.regularField,
                styles.fSMedium,
                {
                  width: "9.39%",
                  marginTop: "4px",
                  paddingTop: "0.36cm",
                },
              ]}
            >
              {data.addressNumber}
            </Text>
            <Text
              style={[
                styles.regularField,
                styles.fSMedium,
                {
                  width: "16.56%",
                  marginTop: "4px",
                  paddingTop: "0.36cm",
                },
              ]}
            >
              {data.addressCity}
            </Text>
          </View>
          <View style={[styles.flexRow, { marginTop: "0.30cm" }]}>
            <Text
              style={[
                styles.regularField,
                styles.fSMedium,
                {
                  width: "25.33%",
                  marginTop: "4px",
                  paddingTop: "0.36cm",
                  textTransform: "lowercase",
                },
              ]}
            >
              {data.salary}
            </Text>
            <Text
              style={[
                styles.regularField,
                styles.fSMedium,
                {
                  width: "34.94%",
                  marginTop: "4px",
                  paddingTop: "0.36cm",
                },
              ]}
            >
              {data.job}
            </Text>
            <Text
              style={[
                styles.regularField,
                styles.fSMedium,
                { width: "11.27%", marginTop: "4px", paddingTop: "0.62cm" },
              ]}
            >
              {data.jobEntryDay}
            </Text>
            <Text
              style={[
                styles.regularField,
                styles.fSMedium,
                {
                  width: "17.5%",
                  marginTop: "4px",
                  paddingTop: "0.62cm",
                },
              ]}
            >
              {data.jobEntryMonth}
            </Text>
            <Text
              style={[
                styles.regularField,
                styles.fSMedium,
                {
                  width: "11.38%",
                  marginTop: "4px",
                  paddingTop: "0.62cm",
                },
              ]}
            >
              {data.jobEntryYear}
            </Text>
          </View>
          <View style={[styles.flexRow, { marginTop: "0.50cm" }]}>
            <Text
              style={[
                styles.regularField,
                styles.fSMedium,
                {
                  width: "60.27%",
                  marginTop: "4px",
                  height: "0.67cm",
                  paddingTop: "0.17cm",
                },
              ]}
            >
              {data.companyName}
            </Text>
            <Text
              style={[
                styles.regularField,
                styles.fSMedium,
                {
                  width: "39.88%",
                  marginTop: "4px",
                  height: "0.67cm",
                  paddingTop: "0.17cm",
                },
              ]}
            >
              {data.companyId}
            </Text>
          </View>
          <View style={styles.flexRow}>
            <Text
              style={[
                styles.regularField,
                styles.fSMedium,
                {
                  width: "76%",
                  marginLeft: "1cm",
                  textAlign:'left',
                  marginTop: "4px",
                  paddingTop: "0.36cm",
                },
              ]}
            >
              {data.actualDate}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
export default DocumentPdf;
