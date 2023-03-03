import React from 'react';
import {Linking, StyleSheet, Text, View} from 'react-native';

import {GithubRepos} from '../../../../../store/services/types';

interface ReposListItemProps {
    repo: GithubRepos;
}

export default function ReposListItem({repo}: ReposListItemProps) {
    const openURL = () => {
        Linking.openURL(repo.html_url);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{repo.name}</Text>
            <Text>{repo.full_name}</Text>
            <Text onPress={openURL}>{repo.html_url}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        marginTop: 20,
        padding: 5,
        borderRadius: 4,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});
