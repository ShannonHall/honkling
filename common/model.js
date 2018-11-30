function predict(x, model, commands) {
	if (!(x instanceof tf.Tensor)) {
		x = tf.tensor(x);
	}
	let input_shape = model.config['input_shape'].slice();
	input_shape.unshift(-1);

	let output = model.predict(x.reshape(input_shape));

	maxProb = output.max(axis = 1).dataSync()[0];
	let index = commands.indexOf("unknown");
	if (maxProb > predictionThreshold) {
		index = output.argMax(axis).dataSync()[0];
	}

	return commands[index];
}
