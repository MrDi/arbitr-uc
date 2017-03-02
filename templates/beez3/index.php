<?php
/**
 * @package     Joomla.Site
 * @subpackage  Templates.beez3
 *
 * @copyright   Copyright (C) 2005 - 2016 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

// No direct access.
defined('_JEXEC') or die;

JLoader::import('joomla.filesystem.file');


if ($showRightColumn == 0 and $showleft == 0)
{
	$showno = 0;
}

JHtml::_('behavior.framework', true);

// Get params
$color          = $this->params->get('templatecolor');
$logo           = $this->params->get('logo');
$navposition    = $this->params->get('navposition');
$headerImage    = $this->params->get('headerImage');
$config         = JFactory::getConfig();
$bootstrap      = explode(',', $this->params->get('bootstrap'));
$option         = JFactory::getApplication()->input->getCmd('option', '');

// Output as HTML5
$this->setHtml5(true);

if (in_array($option, $bootstrap))
{
	// Load optional rtl Bootstrap css and Bootstrap bugfixes
	JHtml::_('bootstrap.loadCss', true, $this->direction);
}

$this->addStyleSheet($this->baseurl . '/templates/system/css/system.css');
$this->addStyleSheetVersion($this->baseurl . '/templates/' . $this->template . '/css/application.css');

$this->addStyleSheet($this->baseurl . '/templates/' . $this->template . '/css/' . htmlspecialchars($color, ENT_COMPAT, 'UTF-8') . '.css', 'text/css', 'screen');





// Check for a custom CSS file
$userCss = JPATH_SITE . '/templates/' . $this->template . '/css/screen.css';

if (file_exists($userCss) && filesize($userCss) > 0)
{
	$this->addStyleSheetVersion($this->baseurl . '/templates/' . $this->template . '/css/screen.css');
    $this->addStyleSheetVersion($this->baseurl . '/templates/' . $this->template . '/css/responsive.css');
}

JHtml::_('bootstrap.framework');

$this->addScript($this->baseurl . '/templates/' . $this->template . '/javascript/skrollr.js');
$this->addScript($this->baseurl . '/templates/' . $this->template . '/javascript/application.js');
/*
$this->addScript($this->baseurl . '/templates/' . $this->template . '/javascript/md_stylechanger.js');
$this->addScript($this->baseurl . '/templates/' . $this->template . '/javascript/hide.js');
$this->addScript($this->baseurl . '/templates/' . $this->template . '/javascript/respond.src.js');
$this->addScript($this->baseurl . '/templates/' . $this->template . '/javascript/template.js');*/

require __DIR__ . '/jsstrings.php';
?>
<!DOCTYPE html>
<html  class="no-touch" lang="<?php echo $this->language; ?>" dir="<?php echo $this->direction; ?>">
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=3.0, user-scalable=yes"/>
		<meta name="HandheldFriendly" content="true" />
		<meta name="apple-mobile-web-app-capable" content="YES" />
		<jdoc:include type="head" />
		<!--[if IE 7]><link href="<?php echo $this->baseurl; ?>/templates/<?php echo $this->template; ?>/css/ie7only.css" rel="stylesheet" /><![endif]-->
		<!--[if lt IE 9]><script src="<?php echo JUri::root(true); ?>/media/jui/js/html5.js"></script><![endif]-->
        
       <!-- <script type="text/javascript">
            var s = skrollr.init();
        </script>-->
        
        <link rel="icon" href="/templates/beez3/favicon.png" type="image/x-icon">
        <link rel="shortcut icon" href="/templates/beez3/favicon.png" type="image/x-icon">
        <script src="http://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
	</head>
	<body>
        <div class="preloader">
            <div class="gif_pre">
                <img src="images/loader/loader_arbitr.gif" />
            </div>
        </div>
        
        <div class="btn-menu" style="position: fixed; top: 0px; left: 0px; right: 0px; overflow: hidden; height: 85px;">
       <!-- <div class="btn-menu" style="position: fixed; top: 0px; left: 0px; right: 0px; overflow: hidden; height: 85px;">-->
            <div class="midnightHeader default" style="position: absolute; overflow: hidden; top: 0px; left: 0px; right: 0px; bottom: 0px; transform: translateY(0%) translateZ(0px);">
                <div class="midnightInner" style="position: absolute; overflow: hidden; top: 0px; left: 0px; right: 0px; bottom: 0px; transform: translateY(0%) translateZ(0px);">
                    <div class="menu-transition">
                        <div class="mid"></div>
                        <a href="#" class="text">меню</a>
                    </div>
                </div>
            </div>
            <div class="midnightHeader white" style="position: absolute; overflow: hidden; top: 0px; left: 0px; right: 0px; bottom: 0px; transform: translateY(100%) translateZ(0px);">
                <div class="midnightInner" style="position: absolute; overflow: hidden; top: 0px; left: 0px; right: 0px; bottom: 0px; transform: translateY(-100%) translateZ(0px);">
                    <div class="menu-transition">
                        <div class="mid"></div>
                        <a href="#" class="text">меню</a>
                    </div>
                </div>
            </div>
	    </div>
        
        <div class="sub-menu">
            <div class="list">
                 <jdoc:include type="modules" name="menu" />
               <!-- <ul id="yw0">
                    <li class="active"><a href="/">Главная</a></li>
                    <li><a href="/about.html">О КОМПАНИИ / ЮРИСТЫ</a></li>
                    <li><a href="/person.html">для физических лиц</a></li>
                    <li><a href="/practices">для Юридических лиц</a></li>
                    <li><a href="/how-we-do">УГОЛОВНЫЕ ДЕЛА</a></li>
                    <li><a href="/contact.html">Контакты</a></li>
                    <li><a href="/contact">НОВОСТИ / СТАТЬИ</a></li>

                </ul>-->
            </div>
            <div class="close">
                <div class="close_i">
                    <div class="top"></div>
                    <div class="bottom"></div>
                </div>
            </div>
	    </div>
	
        <div class="out">
            
        <header id="header">
            <jdoc:include type="modules" name="pos-1" />
            <jdoc:include type="modules" name="pos-1-1" />
            <jdoc:include type="modules" name="pos-1-2" />
		</header><!-- end header -->
            
        <jdoc:include type="modules" name="pos-2" />      
  	    <jdoc:include type="modules" name="pos-2-1" />   
        <jdoc:include type="modules" name="pos-2-2" />   
        <div class="main">
        <jdoc:include type="modules" name="pos-3" />      
        <jdoc:include type="modules" name="pos-3-1" />   
        <jdoc:include type="modules" name="pos-3-2" />   
        <jdoc:include type="message" />
		<jdoc:include type="component" />
        <jdoc:include type="modules" name="pos-4" />      
        <jdoc:include type="modules" name="pos-4-1" />   
        <jdoc:include type="modules" name="pos-4-2" />  
    	</div>
        <jdoc:include type="modules" name="pos-5" />      
        <jdoc:include type="modules" name="pos-5-1" />   
        <jdoc:include type="modules" name="pos-5-2" />
            
        </div>
        
		
        <jdoc:include type="modules" name="pos-6" />      
        <jdoc:include type="modules" name="pos-6-1" />   
        <jdoc:include type="modules" name="pos-6-2" /> 
        <jdoc:include type="modules" name="pos-7" /> 
        
       <!-- <script type="text/javascript" src="/templates/beez3/javascript/jquery-3.1.1.min.js"></script>-->
        <script type="text/javascript" src="/templates/beez3/javascript/verge.min.js"></script>
        <script type="text/javascript" src="/templates/beez3/javascript/span.js"></script>
        <script type="text/javascript" src="/templates/beez3/javascript/jquery.scrollTo-1.4.3.1-min.js"></script>
        <script type="text/javascript" src="/templates/beez3/javascript/midnight.jquery.min.js"></script>
        <script type="text/javascript" src="/templates/beez3/javascript/smoothscroll.js"></script>
        <script type="text/javascript" src="/templates/beez3/javascript/jquery.maskedinput.js"></script>
        <script type="text/javascript" src="/templates/beez3/javascript/start.js"></script>
        
	</body>
</html>
