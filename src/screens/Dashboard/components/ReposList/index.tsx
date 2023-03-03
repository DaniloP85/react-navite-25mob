import React from 'react';
import {FlatList} from 'react-native';
import {GithubRepos} from '../../../../store/services/types';
import ReposListItem from './ReposItem';

interface ReposListProps {
    repos: GithubRepos[];
}

export default function ReposList({repos}: ReposListProps) {
    return (
        <FlatList
            scrollEnabled={false}
            data={repos}
            renderItem={({item}) => <ReposListItem repo={item} />}
            keyExtractor={({id}) => id.toString()}
        />
    );
}
