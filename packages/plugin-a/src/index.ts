import { Entity } from '@woubuc/lib';

export class PluginAEntity extends Entity {
	public sayHello(): void {
		console.log('Plugin A says hello');
	}
}
