<?php
class Config
{
    public static function getDS()
    {
        return DIRECTORY_SEPARATOR;
    }

    public static function getSiteRoot()
    {
        return self::getDS() . 'wamp64' . self::getDS() . 'www' . self::getDS() . 'scandiweb-test';
    }

    public static function getIncPath()
    {
        return self::getSiteRoot() . self::getDS() . 'includes';
    }

    public static function getCorePath()
    {
        return self::getSiteRoot() . self::getDS() . 'core';
    }
}

$ds = Config::getDS();
$siteRoot = Config::getSiteRoot();
$incPath = Config::getIncPath();
$corePath = Config::getCorePath();

require_once $incPath . '/config.php';

require_once $corePath . '/product.php';