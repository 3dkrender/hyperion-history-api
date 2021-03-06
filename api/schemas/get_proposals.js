exports.GET = {
    description: 'get proposals',
    summary: 'get proposals',
    tags: ['state'],
    querystring: {
        type: 'object',
        properties: {
            "proposer": {
                description: 'filter by proposer',
                type: 'string'
            },
            "proposal": {
                description: 'filter by proposal name',
                type: 'string'
            },
            "account": {
                description: 'filter by either requested or provided account',
                type: 'string'
            },
            "requested": {
                description: 'filter by requested account',
                type: 'string'
            },
            "provided": {
                description: 'filter by provided account',
                type: 'string'
            },
            "executed": {
                description: 'filter by execution status',
                type: 'boolean'
            },
            "track": {
                description: 'total results to track (count) [number or true]',
                type: 'string'
            },
            "skip": {
                description: 'skip [n] actions (pagination)',
                type: 'integer',
                minimum: 0
            },
            "limit": {
                description: 'limit of [n] actions per page',
                type: 'integer',
                minimum: 1
            }
        }
    }
};
