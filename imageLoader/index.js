import React, { useState } from "react";
import { View, Image, ActivityIndicator } from "react-native";

// import { Container } from './styles';

export default function ImageLoader({ uri }) {
    const [loading, setLoading] = useState(false);

    return (
        <View
            style={{
                width: "100%",
                height: 150,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {loading && <ActivityIndicator />}
            <Image
                resizeMode="cover"
                source={{ uri, cache: "force-cache" }}
                style={
                    loading
                        ? { width: 0, height: 0 }
                        : { width: "100%", height: "100%" }
                }
                onLoadStart={e => setLoading(true)}
                onLoadEnd={e => setLoading(false)}
                onLoad={e => setLoading(false)}
            />
        </View>
    );
}
