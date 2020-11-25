<<<<<<< HEAD
import React, { Component } from "react";
import { StyleSheet, Dimensions, ActivityIndicator } from "react-native";

import { Block } from "galio-framework";

import Theme from "../constants/Theme";
import { Card } from "../components";

import { connect } from "react-redux";
import { fetchCurrentData } from "../redux/actions/currentAction";
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("screen");

class Current extends Component {
  componentDidMount() {
    this.props.fetchCurrentData();
  }

  render() {
    const { item, loading } = this.props;
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {loading === true ? (
          <Block flex middle style={styles.loading}>
            <ActivityIndicator animating={true} color="#efeved" />
          </Block>
        ) : (
          <Block safe flex style={styles.container}>
            {item.map((item) => (
              <Card
                item={item}
                bookingid
                name
                mobile
                pickupaddress
                dropaddress
                status
              />
            ))}
          </Block>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.COLORS.PRIMARY,
    alignItems: "center",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: height / 1.5,
  },
});

const mapStateToProps = (state) => ({
  item: state.current.currentitem,
  loading: state.current.currentloading,
});

export default connect(mapStateToProps, { fetchCurrentData })(Current);
=======
import React, { Component } from "react";
import { StyleSheet, Dimensions, FlatList } from "react-native";
import { Block, Button, Text } from "galio-framework";

import Theme from "../constants/Theme";
import { Card } from "../components";

import { connect } from "react-redux";
import { fetchCurrentData } from "../redux/actions/currentAction";
import { ScrollView } from "react-native-gesture-handler";

const { width } = Dimensions.get("screen");

class Current extends Component {
  componentDidMount() {
    this.props.fetchCurrentData();
  }

  renderLoading = () => {
    if (this.props.loading === true) {
      return (
        <Block flex style={styles.loading}>
          <Text color="purple" size={25}>
            Loading...
          </Text>
        </Block>
      );
    }
    return null;
  };

  render() {
    const { item } = this.props;
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {this.props.loading === true ? (
          <Block flex style={styles.loading}>
            <Text color="purple" size={25}>
              Loading...
            </Text>
          </Block>
        ) : (
          <Block safe style={styles.container}>
            {item.map((item) => (
              <Card
                item={item}
                bookingid
                name
                mobile
                pickupaddress
                dropaddress
                status
              />
            ))}
          </Block>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.COLORS.PRIMARY,
    alignItems: "center",
  },
  loading: {
    justifyContent: "center",
    alignItems: "center",
  },
});

const mapStateToProps = (state) => ({
  item: state.current.currentitem,
  loading: state.current.loading,
});

export default connect(mapStateToProps, { fetchCurrentData })(Current);
>>>>>>> b995370880bdb2fecff832c4b575131de126e5e4
