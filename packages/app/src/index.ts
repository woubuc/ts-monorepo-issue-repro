import { Entity } from '@woubuc/lib';

export class AppEntity extends Entity {
	public sayHello(): void {
		console.log('App says hello');
	}
}
