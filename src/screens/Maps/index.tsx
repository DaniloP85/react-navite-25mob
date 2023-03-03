import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {StyleSheet} from 'react-native';

export default function Maps() {
    return (
        <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}>
            <Marker
                coordinate={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                }}
                title={'FIAP'}
                description={'Educação que transformar'}
            />
        </MapView>
    );
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
});
