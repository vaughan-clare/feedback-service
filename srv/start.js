const Seneca = require('seneca');
const Feedback = require('../index');

const Service = Seneca()
    .listen({ port: 5000, host: '127.0.0.1' })
    .use(Feedback);

Service.ready((err) => {
    if (err) {
        return Service.log.error(err);
    }

    return Service.log.info({
        service: 'feedback-service',
        message: 'Feedback service started'
    });
});