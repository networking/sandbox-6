fos.Router.setData({
    "base_url": "", "routes": {
        "admin_networking_initcms_page_list": {
            "tokens": [["text", "\/admin\/cms\/pages\/list"]],
            "defaults": [],
            "requirements": [],
            "hosttokens": [],
            "methods": [],
            "schemes": []
        },
        "admin_networking_initcms_page_create": {
            "tokens": [["text", "\/admin\/cms\/pages\/create"]],
            "defaults": [],
            "requirements": [],
            "hosttokens": [],
            "methods": [],
            "schemes": []
        },
        "admin_networking_initcms_page_batch": {
            "tokens": [["text", "\/admin\/cms\/pages\/batch"]],
            "defaults": [],
            "requirements": [],
            "hosttokens": [],
            "methods": [],
            "schemes": []
        },
        "admin_networking_initcms_page_edit": {
            "tokens": [["text", "\/edit"], ["variable", "\/", "[^\/]++", "id", true], ["text", "\/admin\/cms\/pages"]],
            "defaults": [],
            "requirements": [],
            "hosttokens": [],
            "methods": [],
            "schemes": []
        },
        "admin_networking_initcms_page_delete": {
            "tokens": [["text", "\/delete"], ["variable", "\/", "[^\/]++", "id", true], ["text", "\/admin\/cms\/pages"]],
            "defaults": [],
            "requirements": [],
            "hosttokens": [],
            "methods": [],
            "schemes": []
        },
        "admin_networking_initcms_page_show": {
            "tokens": [["text", "\/show"], ["variable", "\/", "[^\/]++", "id", true], ["text", "\/admin\/cms\/pages"]],
            "defaults": [],
            "requirements": [],
            "hosttokens": [],
            "methods": [],
            "schemes": []
        },
        "admin_networking_initcms_page_export": {
            "tokens": [["text", "\/admin\/cms\/pages\/export"]],
            "defaults": [],
            "requirements": [],
            "hosttokens": [],
            "methods": [],
            "schemes": []
        },
        "admin_networking_initcms_page_acl": {
            "tokens": [["text", "\/acl"], ["variable", "\/", "[^\/]++", "id", true], ["text", "\/admin\/cms\/pages"]],
            "defaults": [],
            "requirements": [],
            "hosttokens": [],
            "methods": [],
            "schemes": []
        },
        "admin_networking_initcms_page_translate": {
            "tokens": [["variable", "\/", "[^\/]++", "locale", true], ["text", "\/locale"], ["variable", "\/", "[^\/]++", "id", true], ["text", "\/admin\/cms\/pages\/translate"]],
            "defaults": [],
            "requirements": {"method": "POST"},
            "hosttokens": [],
            "methods": [],
            "schemes": []
        },
        "admin_networking_initcms_page_copy": {
            "tokens": [["variable", "\/", "[^\/]++", "id", true], ["text", "\/admin\/cms\/pages\/copy"]],
            "defaults": [],
            "requirements": {"method": "POST"},
            "hosttokens": [],
            "methods": [],
            "schemes": []
        },
        "admin_networking_initcms_page_parentPageList": {
            "tokens": [["text", "\/admin\/cms\/pages\/parent_page\/"]],
            "defaults": [],
            "requirements": {"method": "GET"},
            "hosttokens": [],
            "methods": [],
            "schemes": []
        },
        "admin_networking_initcms_page_pageSettings": {
            "tokens": [["variable", "\/", "[^\/]++", "id", true], ["text", "\/admin\/cms\/pages\/page_settings"]],
            "defaults": [],
            "requirements": {"method": "GET"},
            "hosttokens": [],
            "methods": [],
            "schemes": []
        },
        "admin_networking_initcms_page_link": {
            "tokens": [["variable", "\/", "[^\/]++", "locale", true], ["text", "\/locale"], ["variable", "\/", "[^\/]++", "id", true], ["text", "\/admin\/cms\/pages\/link"]],
            "defaults": [],
            "requirements": {"method": "GET"},
            "hosttokens": [],
            "methods": [],
            "schemes": []
        },
        "admin_networking_initcms_page_draft": {
            "tokens": [["variable", "\/", "[^\/]++", "id", true], ["text", "\/admin\/cms\/pages\/draft"]],
            "defaults": [],
            "requirements": {"method": "GET"},
            "hosttokens": [],
            "methods": [],
            "schemes": []
        },
        "admin_networking_initcms_page_review": {
            "tokens": [["variable", "\/", "[^\/]++", "id", true], ["text", "\/admin\/cms\/pages\/review"]],
            "defaults": [],
            "requirements": {"method": "GET"},
            "hosttokens": [],
            "methods": [],
            "schemes": []
        },
        "admin_networking_initcms_page_publish": {
            "tokens": [["variable", "\/", "[^\/]++", "id", true], ["text", "\/admin\/cms\/pages\/publish"]],
            "defaults": [],
            "requirements": {"method": "GET"},
            "hosttokens": [],
            "methods": [],
            "schemes": []
        },
        "admin_networking_initcms_page_offline": {
            "tokens": [["variable", "\/", "[^\/]++", "id", true], ["text", "\/admin\/cms\/pages\/offline"]],
            "defaults": [],
            "requirements": {"method": "GET"},
            "hosttokens": [],
            "methods": [],
            "schemes": []
        },
        "admin_networking_initcms_page_cancelDraft": {
            "tokens": [["variable", "\/", "[^\/]++", "id", true], ["text", "\/admin\/cms\/pages\/cancel_draft"]],
            "defaults": [],
            "requirements": {"method": "GET"},
            "hosttokens": [],
            "methods": [],
            "schemes": []
        },
        "admin_networking_initcms_page_getPath": {
            "tokens": [["text", "\/admin\/cms\/pages\/get_path\/"]],
            "defaults": [],
            "requirements": {"method": "GET"},
            "hosttokens": [],
            "methods": [],
            "schemes": []
        },
        "admin_networking_initcms_page_batchTranslate": {
            "tokens": [["text", "\/admin\/cms\/pages\/batch_translate"]],
            "defaults": [],
            "requirements": [],
            "hosttokens": [],
            "methods": [],
            "schemes": []
        },
        "admin_networking_initcms_page_editPageSettings": {
            "tokens": [["variable", "\/", "[^\/]++", "no_layout", true], ["variable", "\/", "[^\/]++", "id", true], ["text", "\/admin\/cms\/pages\/edit_page_settings"]],
            "defaults": {"no_layout": true},
            "requirements": [],
            "hosttokens": [],
            "methods": [],
            "schemes": []
        },
        "admin_networking_initcms_page_unlink": {
            "tokens": [["variable", "\/", "[^\/]++", "translationId", true], ["text", "\/translation_id"], ["variable", "\/", "[^\/]++", "id", true], ["text", "\/admin\/cms\/pages\/unlink"]],
            "defaults": [],
            "requirements": {"method": "GET|DELETE"},
            "hosttokens": [],
            "methods": [],
            "schemes": []
        }
    }, "prefix": "", "host": "localhost", "port": "", "scheme": "http", "locale": ""
});