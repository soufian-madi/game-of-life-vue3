import {render, screen} from '@testing-library/vue';
import {describe, it, expect} from 'vitest'
import Tile from '../src/components/Tile.vue'

describe("Tile", () => {
    it("should render Tile correctly", async () => {
        render(Tile, {props:
             {
                    alive: true,  
        }}); 

        const tile = await screen.findByTestId('tile');
        
        expect(tile).toBeTruthy();
    });
}
);