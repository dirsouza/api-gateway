import del from 'del';
import { dest, series, src } from 'gulp';
import linter from 'gulp-tslint';
import typescript from 'gulp-typescript';

const tslint = () => {
  return src('./src/**/*.ts')
    .pipe(linter({ formatter: 'verbose' }))
    .pipe(linter.report());
};

const tsProject = typescript.createProject('tsconfig.json');

const buildApp = () => {
  return src('./src/**/*.ts')
    .pipe(tsProject())
    .pipe(dest('dist/'));
};

const cleanOutput = () => {
  return del('./dist', { force: true });
};

const build = series(cleanOutput, buildApp);

export { tslint, build };
