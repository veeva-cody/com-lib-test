Note for this setup:
- The variables in spacers, breakpoints & container max-widths have been customized, so we have `base.scss` for the custom bootstrap reset there
- Unfortunately, bootstrap is not configured to support `vw` unit checking correctly in `$breakpoints` & `$container-max-widths` so it's displaying warning as we compile, therefore we cloned the `functions.scss` and `variables.scss` locally and commented the warning message marked with `NOTE:`. Only that checking is commented, other code are kept same as the bootstrap ones
- The warning issue is observed in this Github issue: https://github.com/twbs/bootstrap/issues/24061, where it did end up providing supports for `%` only but not `vw` so here we are...
