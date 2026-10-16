export interface Decal {
    key: string;

    position: {
        x: number;
        y: number;
        z: number;
    };

    normal: {
        x: number;
        y: number;
        z: number;
    };

    texture: string;
    textureName: string;
    size: number;
}

export interface Model {
    id: string;
    email: string;
    name: string;
    desc: string;
    scale: number;
    sizeType: string;
    snapshot: string;
    modelType: string;
    modelColor: string;
    backgroundColor: string;
    decalsData: Decal[];
    createdAt: Date;
    updatedAt: Date;
}
