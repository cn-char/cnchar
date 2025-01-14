import {IDrawOption, ITestStatusData} from './common';

declare type TDrawType = 'normal' | 'animation' | 'stroke' | 'test';

declare interface ICharData {
    strokes: Array<string>;
    radStrokes: Array<number>;
    medians: Array<Array<Array<number>>>;
}

export default class HanziWriter {
    quiz(callback: (index: number)=>{
        onMistake (strokeData: ITestStatusData): void;
        onCorrectStroke (strokeData: ITestStatusData): void;
        onComplete (strokeData: ITestStatusData): void;
    }): void;
    hideCharacter(): void;
    animateCharacter(option: {
        onComplete(): void;
    }): void;
    static create(node: Node, text: string, option: IDrawOption): HanziWriter;
    static loadCharacterData(str: string): Promise<ICharData>;
    static getScalingTransform(width?: number, height?: number, padding?: number): {
        scale: number;
        transform: string;
        x: number;
        y: number;
    };
    pauseAnimation(): void;
    resumeAnimation(): void;
    animateStroke(strokeNum: number, options: {onComplete(): void}): void;
    V: any;
}