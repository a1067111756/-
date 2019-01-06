module.exports = function(grunt) {

    // 配置数据定义传递
    grunt.initConfig({
        watch: {
            jade: {
                files: ['views/**'],
                options: {
                    livereload: true
                }
            },
            js: {
                files: ['public/js/**', 'models/**/*.js', 'schemas/**/*.js'],
                //tasks: ['jshint'],
                options: {
                    livereload: true
                }
            }
        },

        nodemon: {
            dev: {
                script: 'app.js',
                options: {
                    args: [],
                    nodeArgs: ['--debug'],
                    ignore: ['README.md', 'node_modules/**', '.DS_Store'],
                    ext: 'js',
                    watch: ['./'],
                    delay: 1000,
                    env: {
                        PORT: '3000'
                    },
                    cwd: __dirname
                }
            }
        },

        mochaTest: {
            options: {
                reporter: 'spec'
            },
            src: ['test/**/*.js']
        },

        concurrent: {
            tasks: ['nodemon', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-concurrent')
    grunt.loadNpmTasks('grunt-nodemon')
    grunt.loadNpmTasks('grunt-mocha-test')

    // 防止某一任务失败，导致grunt全部停止
    grunt.option('force', true)
    // 注册任务
    grunt.registerTask('default', ['concurrent'])
    // 注册单元测试任务
    grunt.registerTask('test', ['mochaTest'])
}