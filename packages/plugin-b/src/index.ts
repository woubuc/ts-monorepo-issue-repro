import { Entity } from '@woubuc/lib';

export class PluginBEntity extends Entity {
	public sayHello(): void {
		console.log('Plugin B says hello');
	}
}
