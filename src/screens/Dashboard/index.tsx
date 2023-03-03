import React from 'react';
import {ActivityIndicator, Image, ScrollView, Text, View} from 'react-native';

// Assets
import {boringImg} from '../../assets';

// Components
import {Button, Input} from '../../components';
import ReposList from './components/ReposList';

// Hooks
import useDashboard from './hooks/useDashboard';

// Styles
import {styles} from './styles';

export default function Dashboard() {
    const {
        user,
        profile,
        setProfile,
        isLoading,
        fetchProfile,
        openProfile,
        repos,
        data,
    } = useDashboard();

    return (
        <View style={styles.container}>
            <Text>
                Logado com: {user.email}
                {'\n'}
            </Text>
            <Text>Qual usuário do Github você quer pesquisar?</Text>
            <Input
                value={profile}
                autoCapitalize="none"
                onChangeText={text => setProfile(text)}
                placeholder="Usuário do Github"
            />
            <Button
                disabled={isLoading}
                text={isLoading ? 'Carregando...' : 'Pesquisar'}
                type="primary"
                onPress={fetchProfile}
            />
            {isLoading ? (
                <View style={styles.loadingArea}>
                    <ActivityIndicator color={'#ed145b'} size="large" />
                    <Text style={styles.loadingText}>Carregando</Text>
                </View>
            ) : data ? (
                <ScrollView style={styles.scroll}>
                    <View style={styles.profileArea}>
                        <Image
                            source={{uri: data.avatar_url}}
                            style={styles.profileImg}
                        />
                        <View style={styles.profileInfo}>
                            <Text style={styles.profileInfoText}>
                                {data.login}
                            </Text>
                            <Text style={styles.profileInfoText}>
                                {data.name}
                            </Text>
                            <Text style={styles.profileInfoText}>
                                {data.bio}
                            </Text>
                            <Text style={styles.profileInfoText}>
                                Repos: {data.public_repos} | Gists{' '}
                                {data.public_gists}
                            </Text>
                        </View>
                    </View>
                    <Text onPress={openProfile}>{data.html_url}</Text>
                    <ReposList repos={repos.data ? repos.data : []} />
                </ScrollView>
            ) : (
                <View style={styles.emptyArea}>
                    <Image source={boringImg} style={styles.emptyImg} />
                    <Text style={styles.emptyText}>
                        Nada pra mostrar :/ {'\n'}Experimente procurar um
                        usuário do Github
                    </Text>
                </View>
            )}
        </View>
    );
}
