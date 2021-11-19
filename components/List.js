import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";

import Card from "./Card";
import { getTodayDate } from '../utils/date'

const List = () => {
  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://nbapp-api.herokuapp.com/v1/matches/${getTodayDate()}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setFeeds(res.data);
          setLoading(false);
        }
      });
  }, []);

  return (
    <>
      {loading ? (
        <View style={styles.emptyList}>
          <ActivityIndicator size='large' color='#2C2839' />
        </View>
      ) : (
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          {/* <View> */}
          {feeds.length > 0 ? (
            <View style={styles.items}>
              {feeds.map((item, index) => {
                return (
                  <Card key={index}  item={item} />
                );
              })}
            </View>
          ) : (
            <View style={styles.emptyList}>
              <Text style={styles.emptyTitle}>Aucun résultat cette nuit</Text>
            </View>
          )}
          {/* </View> */}
        </ScrollView>
      )}
    </>
  );
};

export default List;

const styles = StyleSheet.create({
  items: {
    paddingTop: 20,
  },
  emptyList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
