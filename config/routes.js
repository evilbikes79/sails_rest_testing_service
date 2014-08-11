/**
 * Routes
 *
 * Sails uses a number of different strategies to route requests.
 * Here they are top-to-bottom, in order of precedence.
 *
 * For more information on routes, check out:
 * http://sailsjs.org/#documentation
 */

module.exports.routes = {

  // By default, your root route (aka home page) points to a view
  // located at `views/home/index.ejs`
  // 
  // (This would also work if you had a file at: `/views/home.ejs`)
    '/': {
        view: 'home/index'
    },
    'get /insight/assessments': {
        controller    : 'assessment',
        action        : 'index'
    },
    'get /insight/assessment': {
        controller    : 'assessment',
        action        : 'show'
    },
    'get /insight/actors': {
        controller    : 'actor',
        action        : 'index'
    },
    'get /insight/actor': {
        controller    : 'actor',
        action        : 'show'
    },
    'get /insight/students': {
        controller    : 'actor',
        action        : 'index'
    },
    'get /insight/student': {
        controller    : 'actor',
        action        : 'show'
    },
    'get /insight/instructor': {
        controller    : 'actor',
        action        : 'index'
    },
    'get /insight/instructor': {
        controller    : 'actor',
        action        : 'show'
    },
    'get /insight/classes': {
        controller    : 'course',
        action        : 'index'
    },
    'get /insight/class': {
        controller    : 'course',
        action        : 'show'
    },
    'get /insight/courses': {
        controller    : 'course',
        action        : 'index'
    },
    'get /insight/course': {
        controller    : 'course',
        action        : 'show'
    },
    'get /insight/sections': {
        controller    : 'section',
        action        : 'index'
    },
    'get /insight/section': {
        controller    : 'section',
        action        : 'show'
    },
    'get /insight/outcomes': {
        controller    : 'outcome',
        action        : 'index'
    },
    'get /insight/outcome': {
        controller    : 'outcome',
        action        : 'show'
    },
    'get /insight/learning_objectives': {
        controller    : 'outcome',
        action        : 'index'
    },
    'get /insight/learning_objective': {
        controller    : 'outcome',
        action        : 'show'
    }

};